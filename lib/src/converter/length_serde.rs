use serde::{
    de::{SeqAccess, Visitor},
    ser::SerializeSeq,
    Deserialize, Deserializer, Serialize, Serializer,
};
use svgtypes::LengthUnit;

pub fn serialize<S>(length: &[Option<LengthUnit>; 2], serializer: S) -> Result<S::Ok, S::Error>
where
    S: Serializer,
{
    let mut seq = serializer.serialize_seq(Some(2))?;
    for i in 0..2 {
        let length_def = match length[i] {
            Some(inner_length_unit) => {
                Some(match inner_length_unit {
                    LengthUnit::None => LengthUnitDef::None,
                    LengthUnit::Em => LengthUnitDef::Em,
                    LengthUnit::Ex => LengthUnitDef::Ex,
                    LengthUnit::Px => LengthUnitDef::Px,
                    LengthUnit::In => LengthUnitDef::In,
                    LengthUnit::Cm => LengthUnitDef::Cm,
                    LengthUnit::Mm => LengthUnitDef::Mm,
                    LengthUnit::Pt => LengthUnitDef::Pt,
                    LengthUnit::Pc => LengthUnitDef::Pc,
                    LengthUnit::Percent => LengthUnitDef::Percent,
                })
            }
            None => None,
        };
        seq.serialize_element(&length_def)?;
    }
    seq.end()
}

struct OptionalLengthArrayVisitor;
impl<'de> Visitor<'de> for OptionalLengthArrayVisitor {
    type Value = [Option<LengthUnit>; 2];

    fn expecting(&self, formatter: &mut std::fmt::Formatter) -> std::fmt::Result {
        write!(formatter, "SVG dimension array")
    }

    fn visit_seq<A>(self, mut seq: A) -> Result<Self::Value, A::Error>
    where
        A: SeqAccess<'de>,
    {
        let x = seq.next_element::<Option<LengthUnitDef>>()?.flatten();
        let y = seq.next_element::<Option<LengthUnitDef>>()?.flatten();
        Ok([
            match x {
                Some(inner_length_unit) => {
                    Some(match inner_length_unit {
                        LengthUnitDef::None => LengthUnit::None,
                        LengthUnitDef::Em => LengthUnit::Em,
                        LengthUnitDef::Ex => LengthUnit::Ex,
                        LengthUnitDef::Px => LengthUnit::Px,
                        LengthUnitDef::In => LengthUnit::In,
                        LengthUnitDef::Cm => LengthUnit::Cm,
                        LengthUnitDef::Mm => LengthUnit::Mm,
                        LengthUnitDef::Pt => LengthUnit::Pt,
                        LengthUnitDef::Pc => LengthUnit::Pc,
                        LengthUnitDef::Percent => LengthUnit::Percent,
                    })
                },
                None => None,
            },
            match y {
                Some(inner_length_unit) => {
                    Some(match inner_length_unit {
                        LengthUnitDef::None => LengthUnit::None,
                        LengthUnitDef::Em => LengthUnit::Em,
                        LengthUnitDef::Ex => LengthUnit::Ex,
                        LengthUnitDef::Px => LengthUnit::Px,
                        LengthUnitDef::In => LengthUnit::In,
                        LengthUnitDef::Cm => LengthUnit::Cm,
                        LengthUnitDef::Mm => LengthUnit::Mm,
                        LengthUnitDef::Pt => LengthUnit::Pt,
                        LengthUnitDef::Pc => LengthUnit::Pc,
                        LengthUnitDef::Percent => LengthUnit::Percent,
                    })
                },
                None => None,
            },
        ])
    }
}

pub fn deserialize<'de, D>(deserializer: D) -> Result<[Option<LengthUnit>; 2], D::Error>
where
    D: Deserializer<'de>,
{
    deserializer.deserialize_seq(OptionalLengthArrayVisitor)
}

#[derive(Serialize, Deserialize)]
#[serde(remote = "LengthUnit")]
enum LengthUnitDef {
    None,
    Em,
    Ex,
    Px,
    In,
    Cm,
    Mm,
    Pt,
    Pc,
    Percent,
}

impl Serialize for LengthUnitDef {
    fn serialize<S>(&self, serializer: S) -> Result<S::Ok, S::Error>
    where
        S: Serializer,
    {
        let mut seq = serializer.serialize_seq(Some(1))?;
        match *self {
            inner_length_unit => {
                match inner_length_unit {
                    LengthUnitDef::None => LengthUnit::None,
                    LengthUnitDef::Em => LengthUnit::Em,
                    LengthUnitDef::Ex => LengthUnit::Ex,
                    LengthUnitDef::Px => LengthUnit::Px,
                    LengthUnitDef::In => LengthUnit::In,
                    LengthUnitDef::Cm => LengthUnit::Cm,
                    LengthUnitDef::Mm => LengthUnit::Mm,
                    LengthUnitDef::Pt => LengthUnit::Pt,
                    LengthUnitDef::Pc => LengthUnit::Pc,
                    LengthUnitDef::Percent => LengthUnit::Percent,
                
                }
                //None => None,
            }
        };
        seq.end()
    }
}

struct OptionalLengthDefArrayVisitor;
impl<'de> Visitor<'de> for OptionalLengthDefArrayVisitor {
    type Value = LengthUnitDef;

    fn expecting(&self, formatter: &mut std::fmt::Formatter) -> std::fmt::Result {
        write!(formatter, "SVG dimension array")
    }

    fn visit_seq<A>(self, mut seq: A) -> Result<Self::Value, A::Error>
    where
        A: SeqAccess<'de>,
    {
        let x = seq.next_element::<LengthUnit>()?;
        Ok(
            match x {
                inner_length_unit => {
                    match inner_length_unit {
                        LengthUnit::None => LengthUnitDef::None,
                        LengthUnit::Em => LengthUnitDef::Em,
                        LengthUnit::Ex => LengthUnitDef::Ex,
                        LengthUnit::Px => LengthUnitDef::Px,
                        LengthUnit::In => LengthUnitDef::In,
                        LengthUnit::Cm => LengthUnitDef::Cm,
                        LengthUnit::Mm => LengthUnitDef::Mm,
                        LengthUnit::Pt => LengthUnitDef::Pt,
                        LengthUnit::Pc => LengthUnitDef::Pc,
                        LengthUnit::Percent => LengthUnitDef::Percent,
                    }
                },
                None => None,
            },
        )
    }
}

impl<'de> Deserialize<'de> for LengthUnitDef {
    fn deserialize<D>(deserializer: D) -> Result<LengthUnitDef, D::Error>
    where
        D: Deserializer<'de>,
    {
        deserializer.deserialize_seq(OptionalLengthDefArrayVisitor)
    }
}