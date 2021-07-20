<template>
    <div class="aboutWriter">
        <Row>
          <Col span="20" offset='2'>
            <Card >
                <p slot="title">教育经历</p>
                <List>
                 <ListItem>
                         <ListItemMeta avatar="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIcAAACHCAMAAAALObo4AAAAe1BMVEX///8sMo4nLYzk5e42O5Lv7/U6QJT8/P0kK4tsb6kAAIKJirh6fbEKFoYNGIYpL427vNQbI4mztNEhKIv19fkVHogAAH3d3uqanMLLzN9LT5pZXKDQ0eLBwtlzdq2Qkr2lpsgADoRlaKdESJdSVp2BhLUAAHRNTpKDhK4LNyCbAAASJUlEQVR4nO1bh7KkuJLFG2GFAGEECNe7//+FKwuUo+7Mm+mIt9EZHX1vUSAdKd3JFNcw/sgf+SN/5P+RlPbvlPIjjtZ0fp+Y7UccJMgy6/dIlqHPOLCZOd5VutW7kfX223fSdfo3JzPxRxy2g+LSPcWOcvezlG37dEH8u5Nx0bfG6A6Hh8aHzyDZP95sGEU9PXyOx+XzXov9bjqq773D4Xoo9K8XqJU+TkWH6weI3Ovt6zo+OIH7sIjaNgzfJHbBP/ghcuyPOMoVLQ8DjSYayutU1Dt/J043RPTyJS6Msr9cIMDwj+HKmu1VsbUroBKH9xmH36HtgiNaAzgMKWkuyOr4mDUNlhiHly9tc6TIPD9Ps2GfsGhBw2yDJiB8pgV57kccRhesJ45yXbJu6X23PpGX+/E7xk4w9CN1id6w2CR9c9m9zjGkFvjEbZvSorecQAAve7R+jmPGFjygLNJtXKlda6MoXdod39udFTaBM/Ziga3h76ETX5/GWWjs+oLf0aVZxj5b5EgbWh8s8VF6ZF5GKteexgDbNZWfcy+ZDzW4XhN4s2mFdPH5J2Npir6kl8HyauxOs25gaqZbVxONo7vBESJ46sBfAivaAPNeNbnbFGFB5eMETGQehynAG/9IEaClY3ogugyWBfE52BgSj7YRUUOtQfcZBvPq+cBhb2uWYG+2baB91w+YA4kNIz2Fjrlhz8H8S+KklCAU9Z0OICUJTWcml6EbTKYVVnJ81wm2GxwRBBoHYf7VN7aZlO4RrqY5rnn0KZuKsO/RTMPe5ZuVMzciOcZaDSTqk8yprrGnHEhRxvUkrdM1b3E0FXiIciVgdoWP/TCWQMDEqMWoCGeyj07Z8kXzTSIoWpQGadeHDnwIgXZOjPWI1m4Q9Dc4aKXsyI+EGRRFuNkdpAqVT7144x9Ku2uMoorHlqnJkUscNkhhrhfg43S5GKJbNmyB3qhXaVfBcoOjSGepYFyrlW2BHdfimt+MfLBRIi2NwqkjFltcQ6iK6TE0vfwcapqjoSiUuWBz40+t6JfGMaPwBkc+J3KoGI5qAMcoJ76r+68G5wvezFFZEF740KAze7HuvqBmadjavOxsa9thkUuwaxbEceNFlnZ7G6DTl15lmFMRAAkyJQ5SUYkLrK1RRiMuzigopk80vytLlktboONnLhJV3IqbSvaUvw5FX+n0xHDcZXICKom4n6WRNVC4aelFH6JwcMY92i3gUIy43b+ksnKJIzroCxjAS6R5Efa1nL9Ult2Sm7u5OJf4W3y7+RRSV83N13b9CtO/E4Mp/vxwd+/joO2sFP4BR/JIyLgs4Y2M5t23pyxPszJDvMUBX90JouBGzLsvT0metJAnafE80UVcE72EF8cy/3N5Xn2RzPnzRFccK3oJt13wD+BInlZP03l4nugiZfeajhkneS8WhOx/VFUo4z/TyjSzqqrewn5efVPNd9Se0bUXehJ+wtFHE1NZ2DSxk0ErpjTNtqZp+rc4nlY/6UT2Xhh9faGNMXyLIvOoQWAQsnjNslFEmtIAVhizi29xPK1+guBz+SLp/DONnt7jMB1quCFCTdsaAxgnNlGTMkgN9bLXm8HT6vd7HMb4WlZM1Qcc8RgvgdmHYW8x6+jHeMvCcYxj583Nz7OOF+L3TuLXMqv5gMNECDGbzBASjh3wn+w/9NacwNOo4Rcc0WvZSVM1VnbsN6zTN3v/KtY8K+95nnUJ0lscEwye7bhQOJDnVXKtcHLfGsGjZMx9crzJKAhfcKBbHA3U7ZGimaaJ+3CeiJGC3rWHBSQsWPDg+Ml6NQgEUsp3NhbQM/PJ+vvg+cqj0KpSnl4UVBYjg9wPRdTy3at4yn7CYVVXKwpmc1f10ir2LXOeZn0qHF+kqFId+fJNDjXAKw4W+yPwggOtTaMvZJXV53qSYpbX1qdZWSF9iyNP9HzTr34PuQ5bdOAoZYzLnnEEjARKM2L6QA1WG8rnk+ZhdY/R0Wfl3E2ZzfmJzoyYYEl6iaVxkF91z+cIBY40gZYyVhQJc86C2VGFIxkB12qutGXJdoYbTtI8y/WhwfEq5OBJNi1VCWFqHG1tQsguhow7TqDI985MgxNHZS5SHy7taihChs7VgWzvDM0qKwmGo7/FcRBUY4qKUIxqO5nGMTtdytbBcUSiLMTFBqDCASLpiW2MgDMknMhgoBUn21222fTiJtdDy025z/m8Jqj53vcSh3fgYNVI10scu+ZL7pRYAkcotwICBNl3NWQKCoNHHOc0z424ZymP+obQQtqbe+L4ZRuF94SDbYDDsfNoYUeZRdcAMQ0AxqdsHYlNNSjZlk3t8SsPfpRaE8OStLlQoQoBDMfAcOQs/oSRwuFKHY8p34+djlW62UY4U8YfeA9p5z5lQeZvqmgqBl82GHmj9gsOXYeTMZI9KH+1DhyY6ebEsde10HIscADGxGrf8GsWswhgxSbOMguCbmIhFUllD0m4C+jYvC3nmIBglb/4bhlLxXRXHAb7d+BAZsrVLHEwJfC9pIDNMPL6MgLVupOSzW7q6szGsqlHrG846kw1HonphXLbtwOH4nIaR5SCtC4uOKrcKDdGNbAJDO5xgxhgRBqHP6kinQTorqxkklmp3EKmE78UiukDhSMHpgASxmo/FoPyXpHGYa0+01vId4KeI2IW2qEsXyaKZRht0WOT5lXWAIifdF36PhfDLRqH3c1mfsHByKgRXHDwPlQImIECRaaEUUYspqrgGOWlxDFAeFfeGjwR1vIX29UBTxJ2nl/8CNRjkTvcAhQO74KDkR3bTLnJisXiySmU26vizV0sGaOH6rbM5otHtQwwbtx3VDjXeOBg6MZ6TqHC4doPOAIWEhpmL+XKQjqmDoC8ahF0Tjzss4SlFpcnt2W2wXkLkLfyp6R9RPCa90kPUwZvVO2+Cw5eo0CmkWHO1s5Z+8yc2Q0mt3JRvrhR06u+N8NxV96KSYEkBj5tJrmJkrAf/MMgHdeJ7IoZ6wUHsz9+DNCntceja8bPTIhIMaqR6srGIr/5tsw2Lp1LnxZRri4pHPjXolgWr66gIG7dgYN39kLOh4tJZt2aU26ZYsSYfpPuk4yStEruylsxqS74bExVNE51fgHI0l26CVaoJ24Jzv3Ahj1fsleThEeKkWWDu7e5rXDclreGKMTVHXEcyZ2RRJnzoJoV1VB1hPECKmA6VaRxsAJ9ku1BgwfN0uM1XCSJkNK1PRCsVjt/6WHliSKoJWNk8tIwHzh2us5VPclF4RGgjPuOwEEHPjW/TE0e3ArAco8ruYupbN/sVF/oS3nLJ9UW1E/bImNve+D4xVvrJpp1ziZ9lWgcLADnFYzo4qUZ99dtLjjtlnlfxYKe5jKMXvr4n3BU0rP9na1a2oc0eYWDrXeFTPFUBQJ+wiJwlNxR5rqjdpEwjkIg3xtTEVgVG1u8yG2Iv+JooYr83ZqoXhl+xGEYFrve1c1B/AUOJnQXTtDw7LJw92k1L1Q4BlfZ3ojAbdnAM+GRo3Xws684bFfG0j5IvcJ/xCGlXOuS8TrutKPmhTJnlZ0fS3ddgvqWJnOG8tJBfcDRrKXCYWazOvZ6xJEDHt9n7rSJgpFBicPDsTI+ncU+43AOhmLndOfqdNGBozUKxgvHkY80JzOrV/CJw28nThYdhLnnYJ0QODdUnGYYVXbrrG84zqN1bMZNwbUoiTKPp8DLF74f7I4N2m67IlG2Cxx4XGE98o71wveEO+3RE7BEe9+2WcqSqnS+4jiP1guqLpU9T1U8EMdJgjqJo+Op2A/T+eBjIDN5rRDzeNwLpz3ouuS8Rb4sq3QTMwNfcPCjdV/tRzN6wmZF4hdjLUmgcGyS1o9zdPIPfguuGUMmkGdadPZtFDlvsfKS6isOvzsqPlIQWzwna+oqZtepw+q5kdngpmh9Ol54ENuySBBW7rREO+1Bx5p++R/51JxVX3AYHdKVeNmqhKs6MenC8zZ3x1jiaNnn9cSRMdNxHbZQv86wpk/ySelXzRG7QGa+zvwoR4fEj3Yq/bGs5XAIyPEEDs5BwgccvFNA+dl3M7MbcHLAyBwZRemqq6faujtFFnJ2jHyXSL83AqXpLBXn9QIHp+VMRxccXOWcj5XdjI9MK9ylU/tru2ro+vb0VsgSIHUzSUJFVo5AYFYOi8y7xtFfcfD6aeB8rOXFXHlp5EEZkco46BXHqm9Pb4UwgnqkZLugIsW0Z/MnA2Gb7RqHb3QHjgQbfs/52MbVd3Q7zaOJy5xlV2eK9evxyrPQ9DgrGfuJqFL7cgaD0krh2Fnk9A4c3Gl5SCeI+4J5bkemWj+MJavZXfCt3OdjHSfNLquc5BCPvW2eCTmOpl63JNY8iCls5Hxs5208yZ2ULmUw91tfh4+igl/Kfb72s6XY6sMHF77g4AruUgtpHC0jcMjjumePF+ByuwpZNHRGpZbVgt+PNmOkW6jG0i0q6UXwCUfPCUQ5wiOO+Zx4iLpptR/u1pVbOJStxFEk392FR61j01xXv++kQ8iBY6yExZO1OPP+zHhY2VnZQ083U68hkH1RYcTvLPClahACzCMZ+p6pjKVJH3EMNTxeFVI4Qs7D8qtGuOiXi+JI9YJYpLH62+aYErbZutiiU6OyXnk5LhSGXMBKH03IvN/DzNXNxQtmtbcunjpVEcKs/sl2GG0V6KYi7ncdcMjFAyDHiTuQNieOYuatlf6p/R9UciR/Q62slpkBBc5PYHC2dBxjkdIG+gDisuO12LAiAdbBx1hcL4346czIClRqKxqjl6DtIPuBs8iH5vNllWnN/1dtznhZayUiI+6ZTdvGUqk8Nz4fhlRqDW7f7+r9QFYYf41hSkrnhMxcrVXW4i+X1VaeLJ3rNJhE/5T3g56PxA47GCdjkr8TaKZfSrnLhqTB+T5j28cHkIvTZPKtMrzNSPf5nyQ43rjF9qidy7IS+lMYwqSPdkc40cZQz4ZX/Vei7102lfUWB/T0ntJlJa00lCa1fmikakN0+GEW4lBj0muYruEBZWKv2xW+wTGfbyIiw1b2hpnyfuSzWhZUHZmoLL3GVoc7jAJcjCADImPs6QuO4Ox/YRyFu9Rs6VnJl37lk+DKhBq4z+xjOXKfHVaXUFV15NLHPfBV20FFh2UoczXUCJ8Ppr5Kk2SpDr6uEe/kXEcOLkgClsY4DncLThTX5ldMDD33wDLGj31FS4eCTQOxV6ONjbNT0AQXJHMYVlEBNIxsds7WaNk0ONhVzmYR+fZlnPeCHas6evGspqU8Hh47NHnVQdFYveTomimoPHpoMDKaom9t9b6uvQbVV/bzRtgupnplwyBOCIt11Op1CwTgU07LYN3lF/33A93s4xxuhcHdq8CfhSWUWinaHnksyJHfXuofEnn1CUUctZyqsw0bl7O7ezqWLdCq/hYM5o+V+dBu7VvDRwY5A4BLotVMGRaUBl2Ej2l8slA89kMeHu+Nx1VmfWlVfpYweQCyDEwzuRNdSYyPi9iqe/qQQvuuM5qwaQzdMWL0zfwRB/sgcWLWF+vvnbWcFsyi882Y4lVAx3bT4rTKMf2PYIiEkp4nWL5duizelxsZPx9bFIKtjYY9aJ34bJRvff1vsgOWzy6K4Kf2A6D7/ukBOprcWi99Sb9jSvkPYYg+D4KPFpaQYiqj7eWFON9tGjcxmse9IkGQfeum/0QGE1loutomt758LHs2rS3OjwUIgt2uXfFYTA89hYLxEOcfgMEiq1eZc//U/6VTuZZ1MeGayigbNsjoMduo/WGfJradN3/p8tdkT6wAPLir4U9dS/JtsHtjWXh1hpuVFJFLHx4kJrPzr6X9z6VlW1KtwyMSAy/LMMTGtPAdYKY7lY8LLxsYZN8OBP+alCMIrKR/2mDfNUjvjgOv/9ziuXPfdolZJT9/V/hnQvo6s+rlzbBkf2eGZAFZNkc/KSD/mviUKQehkPxkaHu0INPkP70ZUtyG5Vc0L18jNN4rmEHQ/PObocRvzNQKZkhvPLEc+hplEO7/GgoxS7NWVpaay/D2IMe3G/72HwziL+dN/wCS3AEoC4Dzap427WfGMyoQ/VOR615wFMwBsxQw5uefjw0RBBUr5oH4y5TfJG7em1XAeJjXN9hlXGhzKlbsw8qL8d9kf39XMF3rCllBNVv8LUwrgGCO298MQopLR8Rc2cpQCsyw+T1G8QFKu69OF1Ls/qtu+iP51130j/yRP/JH/gvk/wDjyGF9bLua3wAAAABJRU5ErkJggg==" title="南京邮电大学" description="2022届毕业生" />
                 </ListItem>
                </List>
            </Card>
         </Col>
        </Row>             

        <Row>
          <Col span="20"  offset='2'>
            <Card>
                <p slot="title">实习经历</p>
                <List>
                    <ListItem>
                        南京维硕 | 2019.7-2019.9 
                    </ListItem>
                    <ListItem>
                        亚信科技(南京) | 2021.5-2021.7 
                    </ListItem>
                    <ListItem>
                        南京育儿网 | 2021.7-至今
                    </ListItem>
                </List>
            </Card>
         </Col>
        </Row>
        
        <Row>
          <Col span="20" offset='2'>
            <Card >
                <p slot="title">社交账号</p>
                <p >
                    <Tooltip content="乌衣秣陵雪" placement="top-start">
                        <i class="iconfont" @click= 'goToBili' style="color:rgb(240, 129, 152);margin-left:20px ">&#xe6cf;</i>
                    </Tooltip>
                     <Tooltip content="wxid-18852009583" placement="top-start">
                        <i class="iconfont" style="color:rgb(36, 219, 90);margin-left:20px">&#xe61b;</i>
                    </Tooltip>
                    <Tooltip content="2364180085" placement="top-start">
                        <i class="iconfont" style="color:rgb(1, 136, 251);margin-left:20px">&#xe601;</i>
                    </Tooltip>
                     <Tooltip content="zhuzhile" placement="top-start">
                            <i class="iconfont" style="margin-left:20px" @click="goToGitHub">&#xe64a;</i>
                    </Tooltip>
                </p>
            </Card>
         </Col>
        </Row>
    </div>
</template>

<script>
export default {
    data(){
        return {
            value:0
        }
    },
    methods:{
        goToGitHub(){
            window.location.href = "https://zhuzhile.github.io"
        },
        goToBili(){
            window.location.href = "https://space.bilibili.com/388310981"
        }

    }
}
</script>

<style lang="less" scoped>
@import './aboutWriter.less';
</style>