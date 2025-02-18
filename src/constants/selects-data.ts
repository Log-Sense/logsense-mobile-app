import {
  CircleAlert,
  GalleryVerticalEnd,
  TriangleAlert,
  Calendar,
} from 'lucide-react-native'

export const statusOptions = [
  {
    label: 'Todos',
    value: 'all',
    icon: GalleryVerticalEnd,
    color: '#3f3f46',
  },
  {
    label: 'Warning',
    value: 'warning',
    icon: TriangleAlert,
    color: '#3f3f46',
  },
  {
    label: 'Error',
    value: 'error',
    icon: CircleAlert,
    color: '#3f3f46',
  },
]

export const dateOptions = [
  {
    label: 'Hoje',
    value: 'today',
    icon: Calendar,
    color: '#3f3f46',
  },
  {
    label: 'Última semana',
    value: 'last-week',
    icon: Calendar,
    color: '#3f3f46',
  },
  {
    label: 'Último mês',
    value: 'last-month',
    icon: Calendar,
    color: '#3f3f46',
  },
]