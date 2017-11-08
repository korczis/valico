(function() {var implementors = {};
implementors["jsonway"] = ["impl <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"jsonway/array_builder/struct.ArrayBuilder.html\" title=\"struct jsonway::array_builder::ArrayBuilder\">ArrayBuilder</a>","impl <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"jsonway/object_builder/struct.ObjectBuilder.html\" title=\"struct jsonway::object_builder::ObjectBuilder\">ObjectBuilder</a>",];
implementors["serde"] = [];
implementors["serde_json"] = ["impl <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"enum\" href=\"serde_json/value/enum.Value.html\" title=\"enum serde_json::value::Value\">Value</a>",];
implementors["valico"] = ["impl <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"trait\" href=\"valico/common/error/trait.ValicoError.html\" title=\"trait valico::common::error::ValicoError\">ValicoError</a>","impl <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"valico/json_dsl/errors/struct.Required.html\" title=\"struct valico::json_dsl::errors::Required\">Required</a>","impl <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"valico/json_dsl/errors/struct.WrongType.html\" title=\"struct valico::json_dsl::errors::WrongType\">WrongType</a>","impl <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"valico/json_dsl/errors/struct.WrongValue.html\" title=\"struct valico::json_dsl::errors::WrongValue\">WrongValue</a>","impl <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"valico/json_dsl/errors/struct.MutuallyExclusive.html\" title=\"struct valico::json_dsl::errors::MutuallyExclusive\">MutuallyExclusive</a>","impl <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"valico/json_dsl/errors/struct.ExactlyOne.html\" title=\"struct valico::json_dsl::errors::ExactlyOne\">ExactlyOne</a>","impl <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"valico/json_dsl/errors/struct.AtLeastOne.html\" title=\"struct valico::json_dsl::errors::AtLeastOne\">AtLeastOne</a>","impl <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"valico/json_schema/validators/struct.ValidationState.html\" title=\"struct valico::json_schema::validators::ValidationState\">ValidationState</a>","impl <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"valico/json_schema/errors/struct.WrongType.html\" title=\"struct valico::json_schema::errors::WrongType\">WrongType</a>","impl <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"valico/json_schema/errors/struct.MultipleOf.html\" title=\"struct valico::json_schema::errors::MultipleOf\">MultipleOf</a>","impl <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"valico/json_schema/errors/struct.Maximum.html\" title=\"struct valico::json_schema::errors::Maximum\">Maximum</a>","impl <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"valico/json_schema/errors/struct.Minimum.html\" title=\"struct valico::json_schema::errors::Minimum\">Minimum</a>","impl <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"valico/json_schema/errors/struct.MaxLength.html\" title=\"struct valico::json_schema::errors::MaxLength\">MaxLength</a>","impl <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"valico/json_schema/errors/struct.MinLength.html\" title=\"struct valico::json_schema::errors::MinLength\">MinLength</a>","impl <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"valico/json_schema/errors/struct.Pattern.html\" title=\"struct valico::json_schema::errors::Pattern\">Pattern</a>","impl <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"valico/json_schema/errors/struct.MaxItems.html\" title=\"struct valico::json_schema::errors::MaxItems\">MaxItems</a>","impl <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"valico/json_schema/errors/struct.MinItems.html\" title=\"struct valico::json_schema::errors::MinItems\">MinItems</a>","impl <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"valico/json_schema/errors/struct.UniqueItems.html\" title=\"struct valico::json_schema::errors::UniqueItems\">UniqueItems</a>","impl <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"valico/json_schema/errors/struct.Items.html\" title=\"struct valico::json_schema::errors::Items\">Items</a>","impl <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"valico/json_schema/errors/struct.MaxProperties.html\" title=\"struct valico::json_schema::errors::MaxProperties\">MaxProperties</a>","impl <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"valico/json_schema/errors/struct.MinProperties.html\" title=\"struct valico::json_schema::errors::MinProperties\">MinProperties</a>","impl <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"valico/json_schema/errors/struct.Required.html\" title=\"struct valico::json_schema::errors::Required\">Required</a>","impl <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"valico/json_schema/errors/struct.Properties.html\" title=\"struct valico::json_schema::errors::Properties\">Properties</a>","impl <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"valico/json_schema/errors/struct.Enum.html\" title=\"struct valico::json_schema::errors::Enum\">Enum</a>","impl <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"valico/json_schema/errors/struct.AnyOf.html\" title=\"struct valico::json_schema::errors::AnyOf\">AnyOf</a>","impl <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"valico/json_schema/errors/struct.OneOf.html\" title=\"struct valico::json_schema::errors::OneOf\">OneOf</a>","impl <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"valico/json_schema/errors/struct.Not.html\" title=\"struct valico::json_schema::errors::Not\">Not</a>","impl <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"valico/json_schema/errors/struct.Format.html\" title=\"struct valico::json_schema::errors::Format\">Format</a>","impl <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"valico/json_schema/builder/struct.Dependencies.html\" title=\"struct valico::json_schema::builder::Dependencies\">Dependencies</a>","impl <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"enum\" href=\"valico/json_schema/builder/enum.Dependency.html\" title=\"enum valico::json_schema::builder::Dependency\">Dependency</a>","impl <a class=\"trait\" href=\"serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"valico/json_schema/builder/struct.Builder.html\" title=\"struct valico::json_schema::builder::Builder\">Builder</a>",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
