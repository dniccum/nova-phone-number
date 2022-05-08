<template>
    <PanelItem :index="index" :field="field" />
</template>

<script>
export default {
    props: ['index', 'resource', 'resourceName', 'resourceId', 'field'],
    beforeMount() {
        if (this.field.linkOnDetail && this.field.value) {
            this.field.asHtml = true;
            this.field.value = `<a href="tel:${this.field.value}" class="text-primary">${this.field.value}</a>`
        }
    }
}
</script>
