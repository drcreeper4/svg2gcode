use paste::paste;
//use std::num::ParseFloatError;
use yew::prelude::*;
use yewdux::functional::{use_store, use_store_value};
use svgtypes::LengthUnit;

use crate::{
    state::FormState,
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
                    let (form_state, form_dispatch) = use_store::<FormState>();
                    let children = html! (
                        <>
                            <Opt value={"None"} children={html!("None")}/>
                            <Opt value={"Em"} children={html!("Em")}/>
                            <Opt value={"Ex"} children={html!("Ex")}/>
                            <Opt value={"Px"} children={html!("Px")}/>
                            <Opt value={"In"} children={html!("In")}/>
                            <Opt value={"Cm"} children={html!("Cm")}/>
                            <Opt value={"Mm"} children={html!("Mm")}/>
                            <Opt value={"Pt"} children={html!("Pt")}/>
                            <Opt value={"Pc"} children={html!("Pc")}/>
                            <Opt value={"Percent"} children={html!("Percent")}/>
                        </>
                    );
                    let onchange = form_dispatch.reduce_mut_callback_with(|state, event: Event| {
                        let value = event.target_unchecked_into::<web_sys::HtmlSelectElement>().value();
                        let parsed = match value.as_str() {
                            "None" => LengthUnit::None,
                            "Em" => LengthUnit::Em,
                            "Ex" => LengthUnit::Ex,
                            "Px" => LengthUnit::Px,
                            "In" => LengthUnit::In,
                            "Cm" => LengthUnit::Cm,
                            "Mm" => LengthUnit::Mm,
                            "Pt" => LengthUnit::Pt,
                            "Pc" => LengthUnit::Pc,
                            "Percent" => LengthUnit::Percent,
                            _ => LengthUnit::Mm,
                        };

                        // Handle arrays
                        $(
                            let _ = $app_idx;
                            let parsed = if value.is_empty() { None } else { Some(Ok(parsed)) };
                        )?
                        state.$form_accessor $([$form_idx])? = parsed;
                    });
                    html! {
                        <FormGroup success={form_state.$form_accessor $([$form_idx] .as_ref().unwrap_or(&Ok(LengthUnit::None)))?.is_ok()}>
                            <Select label=$label desc=$desc children={children} onchange={onchange}/>
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