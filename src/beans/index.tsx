// NOTE: import everything and mpas each api call
import * as API from './api';
export {API};

// NOTE: import export of internal types
type CardBean = {
  id: string;
  titolo: string;
  img: string;
  tags: string[];
  autori: string[];
  anno: number;
};

export {CardBean};
