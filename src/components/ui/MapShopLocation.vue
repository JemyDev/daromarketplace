<script>
export default {
    inject: ['provider'],
    computed: {
        shopX () {
            return this.provider.coords.x
        },
        shopY () {
            return this.provider.coords.y
        }
    },
    watch: {
        '$route.params.id': id => {
            this.drawLocation()
        }
    },
    methods: {
        drawLocation() {
            if(!this.provider.context) return
            const ctx = this.provider.context
            ctx.beginPath();
            ctx.arc(this.shopX, this.shopY, 4, 0, 2*Math.PI);
            ctx.fillStyle = 'blue';
            ctx.fill();
            ctx.clearRect(0, 0, 0, 0);
        }
    },
    render () {

        setTimeout(() => {
            this.drawLocation();
        }, 1000)
        
        return true;
    }
}
</script>
