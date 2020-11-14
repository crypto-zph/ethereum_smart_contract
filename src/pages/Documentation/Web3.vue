<template>
<div class="documentation">

<!-- markdown -->
<q-markdown >
Web3
===

</q-markdown>
<!-- /markdown -->

<div class="component q-ma-lg">
    <div class="form-container">
        <u-q-web></u-q-web>
    </div>
</div>

<!-- markdown -->
<q-markdown >

The __code below__ is for `Web Form`

``` html
{{ code }}
```

</q-markdown>
<!-- /markdown -->


</div>
</template>

<script>
import UQWeb from '../../components/UQWeb'

export default
{
    data:() =>
    ({
        code: `<div class="component q-ma-lg">
    <div class="form-container">
        <u-q-web></u-q-web>
    </div>
</div>`
    }),
    components: { UQWeb },
    mounted()
    {
    },
    methods: { },
}
</script>