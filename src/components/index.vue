<template>
    <el-container direction="vertical">
        <theHeader></theHeader>
        <el-container>
            <theSider></theSider>
            <el-container direction="vertical">
                <mainPart></mainPart>
                <theFooter></theFooter>
            </el-container>
        </el-container>
    </el-container>
</template>
<script>
import theFooter from './footer.vue'
import theHeader from './header.vue'
import theSider from './side.vue'
import mainPart from './main.vue'
export default {
    name:'Index',
    components:{theFooter,theHeader,theSider,mainPart}

}
</script>