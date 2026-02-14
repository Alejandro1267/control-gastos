# Control de Gastos con React + Context API

Aplicación web creada con React, TypeScript y Vite para definir un presupuesto y administrar gastos por categoría en tiempo real. El estado global se maneja con Context API y un reducer tipado que persiste presupuesto y movimientos en _LocalStorage_, por lo que la información se conserva entre sesiones.

## Características Principales:

1. **Definición de Presupuesto:** Formulario inicial que valida montos positivos antes de habilitar el resto de la interfaz.
2. **Gestión Completa de Gastos:** Modal con formulario responsivo que permite registrar, editar o eliminar gastos con validaciones de campos obligatorios y control del saldo disponible.
3. **Visualicación del Presupuesto:** Panel con barra de progreso circular y totales (presupuesto, disponible, gastado) además de un botón para reiniciar la aplicación.
4. **Filtro por Categoría:** Selector que muestra solo los gastos asociados a una categoría específica, ideal para analizar hábitos de consumo.
5. **Catálogo de categorías:** Listado tipado con íconos, listo para extenderse con nuevas opciones.

### Stack Tecnológico

- **Frontend:** React + TypeScript, Vite como bundler, TailwindCSS + Headless UI para tipografía y componentes accesibles, y Heroicons para iconografía.
- **UX:** react-circular-progressbar, react-date-picker y react-calendar para métricas visuales y selección de fechas.
- **Utilidades:** UUID para identificar gastos, Context API + useReducer para la lógica de negocio, y persistencia en _LocalStorage_.

### Arquitectura

- **Contexto Global** que expone estado, dispatch y métricas derivadas.
- **Reducer** con acciones tipadas para presupuesto, gastos, modal y filtros, lo que facilita escalar reglas financieras más complejas.
- **Componentes Presentacionale** divididos en formularios, listados y visualizaciones, cada uno consumiendo el contexto mediante el hook _useBudget_.

### URL del Proyecto

https://stellar-sorbet-a7264d.netlify.app
