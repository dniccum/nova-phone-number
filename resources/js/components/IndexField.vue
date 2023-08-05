<template>
    <span v-html="field.value"></span>
</template>

<script>
export default {
    props: ['resourceName', 'field'],
    beforeMount() {
        if (this.field.linkOnIndex) {
            this.field.value = `<a href="tel:${this.field.value}" class="link-default">${this.field.value}</a>`
        }
    }
}
</script>
