import moment from 'moment';

export const handler = async (event, context) => {
  
  const length = event?.queryStringParameters?.length || event.length;
  const width = event?.queryStringParameters?.width || event.width;
  let area = calculateArea(length, width);
  console.log(`The area is ${area}`);
        
  console.log('CloudWatch log group name: ', context.logGroupName);

  const now = moment(); // Get the current moment
  const formattedDate = now.format('YYYY-MM-DD HH:mm:ss'); // Format it
  
  let data = {
    "time": formattedDate,
    "area": area,
  };
    return JSON.stringify(data);
    
  function calculateArea(length, width) {
    return length * width;
  }
};
