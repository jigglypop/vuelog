<template>
    <div align="center">
        <table>
            <tr>
                <td width="120">
                    <router-link :to="{name:'Home'}">홈</router-link>
                </td>
            </tr>
        </table>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class MenuBar extends Vue {

}

</script>

