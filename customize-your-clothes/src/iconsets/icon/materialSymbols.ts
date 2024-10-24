import { h } from 'vue'
import type { IconSet, IconProps } from 'vuetify'

const customSvgNameToComponent: any = {
  // Aquí puedes agregar iconos personalizados si los necesitas
}

export const ms: IconSet = {
  component: (props: IconProps) => h(props.tag, [
    h('span', {
      class: ['material-symbols-outlined'],
      innerHTML: props.icon
    })
  ]),
}