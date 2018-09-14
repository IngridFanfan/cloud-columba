<!--
在card的title上加了click，不然右边的+太小了，很难点。
不知道为什么这里的collapse和card都不需要加 i-，因为不是原生标签？

问题：
1，card的内容框弄不掉。如果用 <card title="+++"> 没有内容框，可是里面没法加<span>,样式，和 extra
2，@click的函数尚未修改
3，collapse 的左右边框。内容展示和添加module的样式不一样，一个是collapse一个是card，因为一个能展开。

-->

<template>
  <div class="secondStep">
    <flow-content :title="title">
      <Collapse v-model="value" simple>
        <Panel name="1">
            史蒂夫·乔布斯
            <p slot="content">史蒂夫·乔布斯（Steve Jobs），1955年2月24日生于美国加利福尼亚州旧金山，美国发明家、企业家、美国苹果公司联合创办人。</p>
        </Panel>
        <Panel name="2">
            斯蒂夫·盖瑞·沃兹尼亚克
            <p slot="content">斯蒂夫·盖瑞·沃兹尼亚克（Stephen Gary Wozniak），美国电脑工程师，曾与史蒂夫·乔布斯合伙创立苹果电脑（今之苹果公司）。斯蒂夫·盖瑞·沃兹尼亚克曾就读于美国科罗拉多大学，后转学入美国著名高等学府加州大学伯克利分校（UC Berkeley）并获得电机工程及计算机（EECS）本科学位（1987年）。</p>
        </Panel>
        <Panel name="3">
            乔纳森·伊夫
            <p slot="content">乔纳森·伊夫是一位工业设计师，现任Apple公司设计师兼资深副总裁，英国爵士。他曾参与设计了iPod，iMac，iPhone，iPad等众多苹果产品。除了乔布斯，他是对苹果那些著名的产品最有影响力的人。</p>
        </Panel>
      </Collapse>

      <Row class="addRow">
        <Col span="100%">
            <Card>
                <p slot="title" @click="addModule">Click the <span class="addModule"> + </span> to create a new module</p>
                <p slot="extra" class="addModule" @click="addModule">+</p>
            </Card>
        </Col>
      </Row>
    </flow-content>



  </div>
</template>

<script>
import flowContent from '../component/flowContent'

export default {
  name: 'secondStep',
  components:{
    'flow-content': flowContent
  },
  data () {
    return {
      value: '1',
      title:
        {
          header:{
            part1:'Please use ',
            part2:'+',
            part3:' to add a new MODULE you needed'
          },
          description: 'Here are some descriptions about these MODULES which you should read them first.'
        }
    }
  },
  methods: {
    addModule() {
      this.$Message.info('This is a info tip');

    }
  }
}
</script>

<style scoped>
span, p.addModule{
  font-size: 16px;
  font-weight: bolder;
  color:#68B3C8;
}

.addRow{
  margin-top: 20px;
  margin-bottom: 20px;
  border: 30px;
}

</style>
