// এখন রাত(সত্য হইলে):
//    তাইলে ঘুমানোর টাইম
// না এখন সকাল(সত্য হইলে):
//    তাইলে ঘুম থেকে উঠার টাইম
// না এখন বিকাল(সত্য হইলে):
//    তাইলে ঘুরতে যেতে হবে
// কোনোটাই সত্য না:
//    তাইলে বসে থাকি

// 1। if statement

// 2। if...else statement

// 3। if...else if statement
// আর আপনাকে অবশ্যই মনে রাখতে হবে। আপনি if (expression) এখানে এক্সপ্রেশনে যেটা দিবেন সেটা অবশ্যই সত্য true নাইলে মিথ্যা false রেজাল্ট দিতে হবে। কন্ডিশনাল স্টেটমেন্ট শুধু এখানে সত্য true বা মিথ্যা false অ্যাক্সেপ্ট করে, অন্যকিছু করে না।

// if(সত্য কিছু হয়) {
//     তাহলে আমার ভিতরের জিনিস এক্সিকিউট হবে
//  } else {
//     নাইলে আমার ভিতরের জিনিস এক্সিকিউট হবে
//  }

// 2। if...else statement
var age = 21;
if(age > 18){
    console.log('Now you are Adult')
}
else{
    console.log('No you are not aged enough to be a adult');
}

//if...else if statement
// if(সত্য কিছু হয়) {
//     তাহলে আমার ভিতরের জিনিস এক্সিকিউট হবে
//  } else if(নইলে যদি আমি সত্য হই){
//     তাহলে আমার ভিতরের জিনিস এক্সিকিউট হবে
//  } else if(নইলে যদি আমি সত্য হই){
//     তাহলে আমার ভিতরের জিনিস এক্সিকিউট হবে
//  } 
//  ...
//  else {
//     নাইলে আমার ভিতরের জিনিস এক্সিকিউট হবে
//  }

var whatDate ='Sunday';

if (whatDate === 'Friday'){
    console.log('It is closed today');

}else if(whatDate === 'Thursday'){
    console.log('It is parsially closed');

}else if(whatDate === 'Saturday'){
    console.log('Some office are closed ');
}else{
    console.log('Normal ! Working day');

}

// নেস্টিং কন্ডিশনাল স্টেট্মেন্ট
// নেস্টিং মানে হচ্ছে একটা কন্ডিশনাল স্টেটমেন্ট এর ভিতরে আরেকটা কন্ডিশনাল স্টেটমেন্ট। এবং এটা সম্পূর্নরূপে বৈধ। আপনি যেভাবে ইচ্ছা শুধু if এর ভিতরেও else if…else বা else if ইউজ করতে পারবেন বা অন্যগুলার ভিতরেও শুধু if ইউজ করতে পারবেন এখানে ধরা বাধার কোনো নিয়ম নাই।

var age = 10;

if(age > 18){
    if(age > 30){
        console.log('You are complete man!');
    } else if(age > 60){
        console.log('You are old Man!');
    }

}else{
    console.log('You are a Child');
}







