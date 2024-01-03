const items = [
  {
    "title": "USUARIOS",
    "icon": "bi bi-people",
    "isOpen": false,
    "childrens": [
      {
        "title": "CU01. Administrar Inicio de Sesión",
        "icon": "",
        "path": "/login"
      },
      {
        "title": "CU14. Registrar Usuario",
        "icon": "",
        "path": "/register"
      },
      {
        "title": "CU13. Gestionar Roles",
        "icon": "",
        "isOpen": false,
        "childrens": [
          {
            "title": "Gestión de Roles",
            "icon": "",
            "path": "/home/roles"
          },
          {
            "title": "CU08. Gestionar Permisos",
            "icon": "",
            "path": "/home/permisos"
          },
        ]

      },
      {
        "title": "CU07. Administrar Perfil de Usuario",
        "icon": "",
      },
      {
        "title": "CU20. Administrar Bitacora",
        "icon": ""
      },
      {
        "title": "CU02. Administrar Cierre de Sesión",
        "icon": ""
      }
    ]
  },
  {
    "title": "RESTAURANTES",
    "icon": "bi bi-list-columns",
    "isOpen": false,
    "childrens": [
      {
        "title": "CU09. Administrar Inventario",
        "isOpen": false,
        "childrens": [
          {
            "title": "Inventario de Productos Disponibles",
            "icon": "",
            "path": "/home/inventario",
          },
          {
            "title": "CU06. Realizar Búsqueda de Producto",
            "icon": ""
          },
          {
            "title": "CU22. Administrar Imagen de Producto",
            "icon": ""
          }
        ]
      },
      {
        "title": "CU03. Gestionar Notas de Ingreso",
        "icon": "",
        "path": "/home/notadeingreso",
      },
      {
        "title": "CU04. Gestionar Notas de Egreso",
        "icon": ""
      },
      {
        "title": "CU17. Gestionar Bodega",
        "icon": "",
        "path": "/home/bodega"
      },
      {
        "title": "CU21. Gestionar Talla",
        "icon": "",
        "path": "/home/talla"
      },
      {
        "title": "COMIDAS",
        "icon": "bi bi-person-vcard",
        "isOpen": false,
        "childrens": [
          {
            "title": "CU05. Registrar Producto",
            "icon": "",
            "path": "/home/producto"
          },
          {
            "title": "CU18. Gestionar Color",
            "icon": "",
            "path": "/home/color"
          },
          {
            "title": "CU19. Gestionar Marca",
            "icon": "",
            "path": "/home/marca"
          },
          {
            "title": "CU15. Gestionar Categoria",
            "icon": "",
            "path": "/home/categoria"
          },
          {
            "title": "CU16. Gestionar Descuento",
            "icon": ""
          }
        ]
      }
    ]
  },
  {
    "title": "ORDENES",
    "icon": "bi bi-cash-coin",
    "isOpen": false,
    "childrens": [
      {
        "title": "CU10. Administrar Venta de producto",
        "path": ""
      },
      {
        "title": "CU11. Realizar Nota de venta",
        "path": ""
      },
      {
        "title": "CU12. Registrar Tipo de pago",
        "path": ""
      }
    ]
  },
  {
    "title": "COMENTARIOS",
    "icon": "bi bi-gear",
    "isOpen": false,
    "childrens": [
      {
        "title": "Buscar",
        "path": ""
      },
      {
        "title": "Listar",
        "path": ""
      }
    ]
  },
  // {
  //   "title": "SOPORTE",
  //   "icon": "bi-question-circle-fill",
  //   "path": ""
  // },
  // {
  //   "title": "REPORTES",
  //   "icon": "bi bi-bar-chart-line",
  //   "path": ""
  // }
]
export { items };