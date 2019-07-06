const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
 User:{
Id: String,
Password: String, 
Name : String,
Email : String,
Points : Int,
DoneProjects : Array,
CurrentProjects : Array,
Friends : Array
}
,Project:
{ 
Id: String,
Steps: Array,
Author: User,
NoDone: Int
}
,UserProject:{
Id: String,
Project: Project,
Mentor: User,
StepsDone: Int,
StepsVerified: Int
}
,Step:{
Id: String,
Title: String,
Text: String,
Photo: String
}
});

const User = mongoose.model('User', UserSchema);
module.exports = User;


// PR sahi se maara h kya maine? As in kuch aur bhi likhna h? Likhna to nahi hai! But photo daalni hoti hai! Voh khud bata dega! Model ki photo kaise daalu
// Nahi ho sakta na. fir chill scenes! Individually PR maarna pad rha h!ITna time lag rha h. PR maardi saari?
// nhi ye pehli h. abhi aur bhi files h but usme and meri files mei differnce h. isliye samjhne mei time lagr ha h
// Abbe sun! Saari files ko daal apne forked repo mein, fir uska PR daal. pakka? Haan obv. PR hi nahi maari tune!!
// !abe ik! Mujhe format janna tha ki kya kya likhna h. Ab PR maarna aata h. Acha! Files upload karle fir saari