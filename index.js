// This file is literally just the map, do what you want with it, don't need to credit

const channelTypeMap = {
    0:'Announcement Channel',
    1:'Text Channel',
    2:'Calender Channel',
    3:'Forum Channel',
    4:'Media Channel',
    5:'Docs Channel',
    6:'Voice Channel',
    7:'List Channel',
    8:'Schedule Channel',
    9:'Streaming Channel'
};

// Example of how to use
// We're using the example of our Log It bot recording channel updates so the file will look different than yours
const channelType = channelUpdated.type;
        const channelTypeName = channelTypeMap[channelType] || 'Unknown Channel Type or Channel Type not recorded';

${channelTypeName} // will return the channel name (use this in your channel.send or whatever
