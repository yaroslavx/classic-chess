import { Figure, FigureNames } from './Figure';
import blackFigure from '../../assets/black-bishop.png';
import whiteFigure from '../../assets/white-bishop.png';
import { Colors } from '../Colors';
import { Cell } from '../Cell';

export class Bishop extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.logo = color === Colors.BLACK ? blackFigure : whiteFigure;
    this.name = FigureNames.BISHOP;
  }

  canMove(target: Cell): boolean {
    if (!super.canMove(target)) return false;
    if (this.cell.isEmptyDiagonal(target)) return true;
    return false;
  }
}
