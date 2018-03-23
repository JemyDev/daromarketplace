<template>
  <div>
      <canvas ref="map-canvas" :width="canvasSize.width" :height="canvasSize.height"></canvas>
      <slot></slot>
  </div>
</template>

<script>
import helpers from '@/helpers/helpers'

export default {
    props: ['mapName', 'coords'],
    data() {
        return {
            provider: {
                context: null,
                mapUrl: '',
                canvasSize: this.canvasSize,
                coords: {}
            },
            maps:[
               {
                   name: 'prontera',
                   width: 312,
                   height: 392
               },
               {
                   name: 'hugel',
                   width: 268,
                   height: 280
               },
               {
                   name: 'ayothaya',
                   width: 320,
                   height: 320
               }
            ],
            canvasSize: {
                width: 0,
                height: 0
            }
        }
    },
    computed: {
        mapUrl() {
            return helpers.getImageMap(this.mapName)
        }
    },
    provide() {
        return {
            provider: this.provider
        }
    },
    methods: {
        setCanvasDimensions() {
            for(let name in this.maps) {
                if(this.maps[name].name === this.mapName) {
                    this.canvasSize.width = this.maps[name].width;
                    this.canvasSize.height = this.maps[name].height;
                }
            }
        }
    },
    created() {
        this.setCanvasDimensions();
    },
    mounted() {
        this.provider.context = this.$refs['map-canvas'].getContext('2d');
        this.provider.mapUrl = this.mapUrl;
        this.provider.canvasSize = this.canvasSize;
        this.provider.coords = this.coords;
    }
}
</script>

<style>

</style>


