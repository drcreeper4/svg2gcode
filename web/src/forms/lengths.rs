use paste::paste;
//use std::num::ParseFloatError;
use yew::prelude::*;
use yewdux::functional::{use_store, use_store_value};

use crate::{
    state::{AppState, FormState},
    ui::*,
};

macro_rules! length_input {
    ($($name: ident {
        $label: literal,
        $desc: literal,
        $form_accessor: expr $(=> $form_idx: literal)?,
        $app_accessor: expr $(=> $app_idx: literal)?,
    })*) => {
        $(
            paste! {
                #[function_component([<$name Input>])]
                pub fn [<$name:snake:lower _input>]() -> Html {
                    let app_state = use_store_value::<AppState>();
                    let (form_state, form_dispatch) = use_store::<FormState>();
                    let oninput = form_dispatch.reduce_mut_callback_with(|state, event: InputEvent| {
                        let value = event.target_unchecked_into::<web_sys::HtmlInputElement>().value();
                        let parsed = value;

                        // Handle Option origins
                        $(
                            let _ = $app_idx;
                            let parsed = if value.is_empty() { None } else { Some(parsed) };
                        )?
                        state.$form_accessor $([$form_idx])? = parsed;
                    });
                    html! {
                        // unwrap_or(&Ok(0.)) is just a macro hack to make None a valid state
                        <FormGroup success={form_state.$form_accessor $([$form_idx] .as_ref().unwrap_or(&Ok(0.)))?.is_ok()}>
                            <Input<String, String> list="LengthUnit_list" label=$label desc=$desc
                                default={app_state.$app_accessor $([$app_idx])?}
                                parsed={form_state.$form_accessor $([$form_idx])?.clone()}
                                oninput={oninput}
                            />
                            <Select id="LengthUnit_list">
                                <Opt value=None>None</Opt>
                                <Opt value=LengthUnit::Em>Em</Opt>
                                <Opt value=LengthUnit::Ex>Ex</Opt>
                                // None,
                                // Em,
                                // Ex,
                                // Px,
                                // In,
                                // Cm,
                                // Mm,
                                // Pt,
                                // Pc,
                                // Percent,
                            </Select>
                            // <Input<f64, ParseFloatError> label=$label desc=$desc
                            //     default={app_state.$app_accessor $([$app_idx])?}
                            //     parsed={form_state.$form_accessor $([$form_idx])?.clone()}
                            //     oninput={oninput}
                            // />
                        </FormGroup>
                    }
                }
            }
        )*
    };
}

length_input! {
    UnitX {
        "Unit X",
        "X-axis dimension unit type (Mm, In, etc.)",
        dimensionsunit => 0,
        settings.conversion.dimensionsunit => 0,
    }
    UnitY {
        "Unit Y",
        "Y-axis dimension unit type (Mm, In, etc.)",
        dimensionsunit => 1,
        settings.conversion.dimensionsunit => 1,
    }
}