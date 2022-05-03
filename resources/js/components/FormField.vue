<template>
    <DefaultField :field="field" :errors="errors" :show-help-text="showHelpText">
        <template #field>
            <input :id="field.name" type="tel"
                class="w-full form-control form-input form-input-bordered"
                :class="errorClasses"
                :placeholder="placeholder"
                v-maska="mask"
                v-model="value"
            />

            <p v-if="hasError" class="help-text error-text my-2 text-danger">
                {{ firstError }}
            </p>
        </template>
    </DefaultField>
</template>

<script>
import { FormField, HandlesValidationErrors } from 'laravel-nova'

const defaultFormat = '(###) ###-####';

export default {
    mixins: [FormField, HandlesValidationErrors],

    props: ['resourceName', 'resourceId', 'field'],

    computed: {
        placeholder() {
            let useMask = this.field.useMaskPlaceholder;
            let placeholder = this.field.placeholder;

            if (useMask) {
                return this.mask;
            } else if (placeholder) {
                return placeholder;
            }

            return this.field.name
        },
        mask() {
            if (this.field.format) {
                return this.field.format;
            }

            return defaultFormat;
        }
    },
    methods: {
        setInitialValue() {
            this.value = this.field.value || ''
        },

        fill(formData) {
            formData.append(this.field.attribute, this.value || '')
        },

        handleChange(value) {
            this.value = value
        }
    }
}
</script>
