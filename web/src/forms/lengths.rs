use paste::paste;
//use std::num::ParseFloatError;
use yew::prelude::*;
use yewdux::functional::{use_store, use_store_value};
use svgtypes::LengthUnit;

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
                    html! {
                        // unwrap_or(&Ok(0.)) is just a macro hack to make None a valid state
                        <FormGroup success={form_state.$form_accessor $([$form_idx] .as_ref().unwrap_or(&Ok(LengthUnit::None)))?.is_ok()}>
                            // <Input<String, String> label=$label desc=$desc
                            //     default={app_state.$app_accessor $([$app_idx])?}
                            //     parsed={form_state.$form_accessor $([$form_idx])?.clone()}
                            //     oninput={oninput}
                            // />
                            <Select label=$label desc=$desc
                                children = {html! (
                                    <>
                                        <Opt value="None"/>
                                        <Opt value="Em"/>
                                        <Opt value="Ex"/>
                                        <Opt value="Px"/>
                                        <Opt value="In"/>
                                        <Opt value="Cm"/>
                                        <Opt value="Mm"/>
                                        <Opt value="Pt"/>
                                        <Opt value="Pc"/>
                                        <Opt value="Percent"/>
                                    </>
                                )}
                            />
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