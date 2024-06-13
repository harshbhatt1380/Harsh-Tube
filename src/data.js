export const API_KEY = 'AIzaSyByypxfnhxQ36mt8wgifj5ZOTf-OiPVcOc';

export const value_converter = (value) =>{
    if(value>=1000000)
        {
            return Math.floor(value/1000000)+"M";
        }
    else if(value>=1000)
        {
            return Math.floor(value/1000)+"k"
        }
    else
    {
        return value;
    }
}