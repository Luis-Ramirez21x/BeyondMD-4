


export default function formatDate(date){


    let yearStr = date.slice(0,4)
    let dayMonthStr = date.slice(5,10) + '-'

    return dayMonthStr + yearStr

}