const vm = Vue.createApp({
data(){
  return{
    perspective: 100,
    rotateX: 0,
    rotateY: 0,
    rotateZ: 0,
  }
},
methods: {
  reset(){
      this.perspective = 100
      this.rotateX = 0
      this.rotateY = 0
      this.rotateZ = 0
  },
  copy(){
    const elmnt = document.createElement('textarea')

    elmnt.setAttribute('readonly', '')
    elmnt.style.position = 'absolute'
    elmnt.style.left= '-9999px'
    elmnt.value = `transform: ${this.box.transform}`

    document.body.appendChild(elmnt)
    elmnt.select()
    document.execCommand('copy')

    document.body.removeChild(elmnt)
  }
},
computed: {
  hoverClasses(){
    return { onHover: this.hovered }
  },
  box(){
    return {
      transform: `
      perspective(${this.perspective}px)
      rotateX(${this.rotateX}deg)
      rotateY(${this.rotateY}deg)
      rotateZ(${this.rotateZ}deg)
      `
    }
  }
}


}).mount('#app')