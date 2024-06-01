<template>
    <DefaultField :field="currentField" :errors="errors" :show-help-text="showHelpText">
        <template #field>
            <input :id="currentField.name" type="tel"
                class="w-full form-control form-input form-input-bordered"
                :class="errorClasses"
                :placeholder="placeholder"
                v-maska="mask"
                v-model="value"
            />
        </template>
    </DefaultField>
</template>

<script>
import { DependentFormField, HandlesValidationErrors } from 'laravel-nova'

const defaultFormat = '(###) ###-####';

export default {
    mixins: [DependentFormField, HandlesValidationErrors],

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
