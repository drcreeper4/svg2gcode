#[cfg(feature = "serde")]
use serde::{Deserialize, Serialize};

/// Approximate [Bézier curves](https://en.wikipedia.org/wiki/B%C3%A9zier_curve) with [Circular arcs](https://en.wikipedia.org/wiki/Circular_arc)
mod arc;
/// Converts an SVG to G-Code in an internal representation
mod converter;
/// Emulates the state of an arbitrary machine that can run G-Code
mod machine;
/// Operations that are easier to implement after G-Code is generated, or would
/// otherwise over-complicate SVG conversion
mod postprocess;
/// Provides an interface for drawing lines in G-Code
/// This concept is referred to as [Turtle graphics](https://en.wikipedia.org/wiki/Turtle_graphics).
mod turtle;

pub use converter::{svg2program, ConversionConfig};
pub use machine::{Machine, MachineConfig, SupportedFunctionality};
pub use postprocess::PostprocessConfig;
pub use turtle::Turtle;

#[cfg_attr(feature = "serde", derive(Serialize, Deserialize))]
#[derive(Debug, Default, Clone, PartialEq)]
pub struct Settings {
    pub conversion: ConversionConfig,
    pub machine: MachineConfig,
    pub postprocess: PostprocessConfig,
}

#[cfg(test)]
mod test {
    use super::*;
    use g_code::emit::{format_gcode_fmt, FormatOptions};
    use svgtypes::{Length, LengthUnit};

    fn get_actual(
        input: &str,
        circular_interpolation: bool,
    ) -> String {
        let config = ConversionConfig::default();
        let document = roxmltree::Document::parse(input).unwrap();

        let machine = Machine::new(
            SupportedFunctionality {
                circular_interpolation,
            },
            None,
            None,
            None,
            None,
        );
        let program = converter::svg2program(&document, &config, machine);

        let mut acc = String::new();
        format_gcode_fmt(&program, FormatOptions::default(), &mut acc).unwrap();
        acc
    }

    #[test]
    fn square_produces_expected_gcode() {
        let square = include_str!("../tests/square.svg");
        let actual = get_actual(square, false);

        assert_eq!(actual, include_str!("../tests/square.gcode"))
    }

    #[test]
    fn square_dimension_override_produces_expected_gcode() {
        let side_length = Length {
            number: 10.,
            unit: LengthUnit::Mm,
        };

        for square in [
            include_str!("../tests/square.svg"),
            include_str!("../tests/square_dimensionless.svg"),
        ] {
            assert_eq!(
                get_actual(square, false),
                include_str!("../tests/square.gcode")
            );
            assert_eq!(
                get_actual(square, false),
                include_str!("../tests/square.gcode")
            );
            assert_eq!(
                get_actual(square, false),
                include_str!("../tests/square.gcode")
            );
        }
    }

    #[test]
    fn square_transformed_produces_expected_gcode() {
        let square_transformed = include_str!("../tests/square_transformed.svg");
        let actual = get_actual(square_transformed, false);

        assert_eq!(actual, include_str!("../tests/square_transformed.gcode"))
    }

    #[test]
    fn square_viewport_produces_expected_gcode() {
        let square_transformed = include_str!("../tests/square_viewport.svg");
        let actual = get_actual(square_transformed, false);

        assert_eq!(actual, include_str!("../tests/square_viewport.gcode"))
    }

    #[test]
    fn circular_interpolation_produces_expected_gcode() {
        let circular_interpolation = include_str!("../tests/circular_interpolation.svg");
        let actual = get_actual(circular_interpolation, true);

        assert_eq!(
            actual,
            include_str!("../tests/circular_interpolation.gcode")
        )
    }

    #[test]
    fn svg_with_smooth_curves_produces_expected_gcode() {
        let svg = include_str!("../tests/smooth_curves.svg");
        assert_eq!(
            get_actual(svg, false),
            include_str!("../tests/smooth_curves.gcode")
        );

        assert_eq!(
            get_actual(svg, true),
            include_str!("../tests/smooth_curves_circular_interpolation.gcode")
        );
    }

    #[test]
    #[cfg(feature = "serde")]
    fn deserialize_v1_config_succeeds() {
        let json = r#"
        {
            "conversion": {
              "dimensionsnumber": [
                  100.0,
                  100.0
              ],
              "dimensionsunit": [
                  "Mm",
                  "Mm"  
              ],
              "tolerance": 0.002,
              "feedrate": 300.0,
              "dpi": 96.0
            },
            "machine": {
              "supported_functionality": {
                "circular_interpolation": true
              },
              "tool_on_sequence": null,
              "tool_off_sequence": null,
              "begin_sequence": null,
              "end_sequence": null
            },
            "postprocess": {
              "origin": [
                0.0,
                0.0
              ]
            }
          }
        "#;
        serde_json::from_str::<Settings>(json).unwrap();
    }

    #[test]
    #[cfg(feature = "serde")]
    fn deserialize_v2_config_succeeds() {
        let json = r#"
        {
            "conversion": {
              "dimensionsnumber": [
                  100.0,
                  0.0
              ],
              "dimensionsunit": [
                  "Mm",
                  "Mm"  
              ],
              "tolerance": 0.002,
              "feedrate": 300.0,
              "dpi": 96.0
            },
            "machine": {
              "supported_functionality": {
                "circular_interpolation": true
              },
              "tool_on_sequence": null,
              "tool_off_sequence": null,
              "begin_sequence": null,
              "end_sequence": null
            },
            "postprocess": { }
          }
        "#;
        serde_json::from_str::<Settings>(json).unwrap();
    }

    #[test]
    #[cfg(feature = "serde")]
    fn deserialize_v3_config_succeeds() {
        let json = r#"
        {
            "conversion": {
              "dimensionsnumber": [
                  100.0,
                  100.0
              ],
              "dimensionsunit": [
                  "Px",
                  "In"  
              ],
              "tolerance": 0.002,
              "feedrate": 300.0,
              "dpi": 96.0
            },
            "machine": {
              "supported_functionality": {
                "circular_interpolation": true
              },
              "tool_on_sequence": null,
              "tool_off_sequence": null,
              "begin_sequence": null,
              "end_sequence": null
            },
            "postprocess": {
                "checksums": false,
                "line_numbers": false
            }
          }
        "#;
        serde_json::from_str::<Settings>(json).unwrap();
    }
}
