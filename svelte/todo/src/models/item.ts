/**
 * 
 */
export interface ListItem {
    title: string;
    description: string;
    createdAt: string,
    updatedAt: string,
    startDate: string,
    endDate: string,
    duration: number,
    files: string[],
    repeat: RepeatingPattern,
    repeatOn: string[],
    type: ItemType,
    steps: ItemStep[],
    parentID: string,
    parentType: ListType,
    parentUrl: string,
    notes: string[],
    done: boolean,
    doneAt: string,

}
/**
 * 
 */
export enum ItemType { task, reminder, routine, shoppingItem }

/**
 * 
 */
export interface ItemStep {
    title: string;
    description: string;
    createdAt: string,
    updatedAt: string,
    startDate: string,
    endDate: string,
}

/**
 * 
 */
export enum RepeatingPattern { daily, weekdays, weekends, weekly, monthly, yearly, custom }

/**
 *  
 */
export enum ListType { todo, shoppingList, expanses }