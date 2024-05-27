import ExpressoTradicional from '../assets/Expresso Tradicional.svg'
import ExpressoAmericano from '../assets/Expresso Americano.svg'
import ExpressoCremoso from '../assets/Expresso Cremoso.svg'
import ExpressoGelado from '../assets/Expresso Gelado.svg'
import CafecomLeite from '../assets/Café com Leite.svg'
import Latte from '../assets/Latte.svg'
import Capuccino from '../assets/Capuccino.svg'
import Macchiato from '../assets/Macchiato.svg'
import Mocaccino from '../assets/Mocaccino.svg'
import ChocolateQuente from '../assets/Chocolate Quente.svg'
import Cubano from '../assets/Cubano.svg'
import Havaiano from '../assets/Havaiano.svg'
import Arabe from '../assets/Árabe.svg'
import irlandes from '../assets/Irlandês.svg'


export interface Coffee {
    id: number;
    image: string;
    tags: string[];
    name: string;
    description: string;
    
    
  }


  export const coffees: Coffee[] = [
    {
        id: 1,
        image: ExpressoTradicional,
        tags: ["Tradicional"],
        name: 'Expresso Tradicional',
        description: 'O tradicional café feito com água quente e grãos moídos',
    },
    {
        id: 2,
        image: ExpressoAmericano,
        tags: ["Tradicional"],
        name: 'Expresso Americano',
        description: 'Expresso diluído, menos intenso que o tradicional',
    },
    {
        id: 3,
        image: ExpressoCremoso,
        tags: ["Tradicional"],
        name: 'Expresso Cremoso',
        description: 'Café expresso tradicional com espuma cremosa',
    },
    {
        id: 4,
        image: ExpressoGelado,
        tags: ["Tradicional", "Gelado"],
        name: 'Expresso Gelado',
        description: 'Bebida preparada com café expresso e cubos de gelo',
    },
    {
        id: 5,
        image: CafecomLeite,
        tags: ["Tradicional", "Com leite"],
        name: 'Café com Leite',
        description: 'Meio a meio de expresso tradicional e leite vaporizado',
    },
    {
        id: 6,
        image: Latte,
        tags: ["Tradicional", "Com leite"],
        name: 'Latte',
        description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    },
    {
        id: 7,
        image: Capuccino,
        tags: ["Tradicional", "Com leite"],
        name: 'Capuccino',
        description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
    },
    {
        id: 8,
        image: Macchiato,
        tags: ["Tradicional", "Com leite"],
        name: 'Macchiato',
        description: 'Café expresso misturado com um pouco de leite quente e espuma',
    },
    {
        id: 9,
        image: Mocaccino,
        tags: ["Tradicional", "Com leite"],
        name: 'Mocaccino',
        description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    },
    {
        id: 10,
        image: ChocolateQuente,
        tags: ["Especial", "Com leite"],
        name: 'Chocolate Quente',
        description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    },
    {
        id: 11,
        image: Cubano,
        tags: ["Especial", "Alcoólico", "Gelado"],
        name: 'Cubano',
        description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
    },
    {
        id: 12,
        image: Havaiano,
        tags: ["Especial"],
        name: 'Havaiano',
        description: 'Bebida adocicada preparada com café e leite de coco',
    },
    {
        id: 13,
        image: Arabe,
        tags: ["Especial"],
        name: 'Árabe',
        description: 'Bebida preparada com grãos de café árabe e especiarias',
    },
    {
        id: 14,
        image: irlandes,
        tags: ["Especial", "Alcoólico"],
        name: 'Irlandês',
        description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    },
];