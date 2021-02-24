document.getElementById('travelled').addEventListener('change', (e) => {
    console.log(e.target.value)

    if (e.target.value == 'Yes') {

        toggleShowCountries(true)

    }
    else {
        toggleShowCountries(false)
    }
})



function toggleShowCountries(showValue) {

    if (showValue) {
        document.getElementById('countriesQ').style.display = 'block'

    } else {
        document.getElementById('countriesQ').style.display = 'none'

    }

}

// 2- Add a Form validation 

function submitForm() {

    let hasError = false;

    // A- Date of birth is not after today's date. 
    // console.log('VAL', document.getElementById('dob').value)
    let today = new Date()
    let s = document.getElementById('dob').value.split('-')
    // console.log('s', s)
    let dob = new Date()
    dob.setFullYear(s[0], s[1] - 1, s[2])
    dob.setHours(0, 0, 0, 0)
    today.setHours(0, 0, 0, 0)
    console.log('dob', document.getElementById('dob').value)
    console.log('today', today)

    if (dob >= today || !document.getElementById('dob').value) {
        console.log('invalid', document.getElementById('dob').value)
        markInvalid(document.getElementById('dob'))
        hasError = true;
        document.getElementById('dobError').style.display = 'block'

    }
    else {
        console.log('valid', document.getElementById('dob').value)

        markValid(document.getElementById('dob'))
        document.getElementById('dobError').style.display = 'none'

    }



    // B- If the user has visited any countries, at least one country name is mentioned in the country textbox. 


    if ( document.getElementById('travelled').value == 'Yes' && !document.getElementById('counties').value) {
        hasError = true;
        markInvalid(document.getElementById('counties'))
    }
    else {
        markValid(document.getElementById('counties'))
    }


    // C- There is no invalid character (&, <, >, #, !, `, ", ~) in any of the input fields.

    let fieldIds = ['first', 'last', 'gender', 'phone', 'email', 'covidContact', 'covidDiagnosis', 'travelled',  'temp'];

    let checkBoxes = ['feverChills', 'cough', 'breath', 'fatigue', 'muscleAche', 'headache', 'smell', 'soreThroat', 'congestion', 'nausea', 'diarrhea',]



    fieldIds.forEach(id => {


        if (document.getElementById(id).value.match(/.*[&<>#!`"~].*/) || !document.getElementById(id).value) {
            console.log(id, document.getElementById(id).value)
            markInvalid(document.getElementById(id))
            hasError = true

        }
        else {
            markValid(document.getElementById(id))
        }


    });

    // checkBoxes.forEach(id => {

    //     if (document.getElementById(id).value.match(/.*[&<>#!`"~].*/)) {
    //         console.log(id, document.getElementById(id).value)
    //     }
    //     markInvalid(document.getElementById(id))

    // }

    // );

    if (hasError == true) {
        console.log('has error')
        document.getElementById('hasError').style.display = "block"

    } else {
        document.getElementById('hasError').style.display = "none"

    }





}


function markInvalid(el) {
    el.style.backgroundColor = '#fae1e4';
    el.style.borderColor = '#d90b22';

}

function markValid(el) {
    el.style.backgroundColor = 'unset';
    el.style.borderColor = 'unset';


}