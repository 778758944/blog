/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-11-16 16:15:35
 * @version $Id$
 */
export default function pageNum(page=0,action){
	switch(action.type){
		case "pageNum_mm":
			return page-1;
		break;


		case 'pageNum_pp':
			return page+1;
		break;

		case 'setPageNum':
			return action.num;
		break;

		default:
			return page;
	}
}
