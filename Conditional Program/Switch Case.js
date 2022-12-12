/* Operators Program
Diffrence b/w == and ===*/
 
 let grade = prompt ('Write of percentage Student')
grade = Number.parseInt (grade)

switch (true) {
	case  grade>90 :
	 console.log('Grade is A');
    break;
    
     case grade>80 :
	 console.log('Grade is B')
	 break;

	 case  grade>70 :
	 console.log('Grade is C')
	 break;

	 case  grade>50 :
	 console.log('Grade is D')
	 break; 
 
    default :
    console.log ('Grade is F')
}