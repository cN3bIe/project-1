type ProdId = number | string;
type ActionConst = string;

interface Action {type: ActionConst;}
interface ActionProd extends Action{prod: Prod;}
interface ActionCard extends Action{id: ProdId;}

interface Prod {
	id: ProdId;
	name: string;
	price: number;
}

interface Catalog {prod: Prod[];}

interface Card {prod: Prod[];}

interface MagazinState extends Catalog,Card {card: Prod[];}