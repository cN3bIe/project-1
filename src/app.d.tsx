type ProdId = number | string;
type ActionConst = string;

interface ActionThunk {
	(dispatch: any): void;
}

type TypeActionWithThunk = ActionConst | ActionThunk;

interface Action {
	type: TypeActionWithThunk;
}
interface ActionProd extends Action{prod: Prod;}
interface ActionCard extends Action{id: ProdId;}

interface Prod {
	id: ProdId;
	name: string;
	price: number;
}

interface Catalog {prod: Prod[];}

interface Card {prod: Prod[];}

interface MagazinState extends Catalog,Card {
	card: ProdId[];
	fetching: boolean;
}