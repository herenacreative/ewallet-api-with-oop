import Joi from "joi";

const joiError = (error={}) => {
    const joiError = error.error.details[0];
    const errorMessage = joiError.message;

    return errorMessage;
}

class FormValidation {
    field;
    fields;
    schema;

    constructor(schema, fields, field = null) {
		this.field = field;
		this.fields = fields;
		this.schema = schema;

		if (field) return this.dynamic();
		return this.static();
	}

    async static(){
        return new Promise((resolve, reject) => {
            const validate = Joi.object(this.schema).validate(this.fields);

            if(validate.error){
                reject(joiError(validate));
            }

            resolve(true);
        });
    }

    dynamic() {
		const dynamicSchema = Object.keys(this.schema)
			.filter(key => this.field.includes(key))
            .reduce((obj, key) => {
                obj[key] = this.schema[key];
                return obj;
            }, {});

        return new Promise((resolve, reject) => {
            const validate = Joi.object(dynamicSchema).validate(this.fields);

            if(validate.error){
                reject(joiError(validate));
            }
            resolve(true)
        });
    }
}

export default FormValidation;