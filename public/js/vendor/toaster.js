/*
* 	13/12/2020 - Somnath Sardar
* 	Toaster Message helps you to show custom messages
* 	Trough Toaster message you can show Error message, Success message and warning message
*
*
* 	To show Toast message you need to call showToast function
* 	This function requires two arguments.
*		First argument is status (error, success, warning)
*		Second arguments is the message.
*	
*	
*		Errror Toast Message:   showToast('error',message);
*		Success Toast Message:   showToast('success',message);
*		Warning Toast Message:   showToast('warning',message);
*/

class Toast {
	toastTimeout;

  constructor(options = {}){
		this.toastTimeout = options.timeout ? options.timeout : 2000;
	}

	show(status,message)
	{
		return new Promise((resolve, reject)=>{
			if(status === 'error')
			{
				let toastError = document.createElement('div')
				toastError.classList.value = 'toast-message toast-error show'
				toastError.innerHTML =  message;
				document.getElementsByTagName('body')[0].append(toastError);
				setTimeout(()=>{ 
					toastError.classList.remove("show");
					toastError.remove();
					resolve('resolved');
				}, this.toastTimeout);
			}
			else if(status === 'success')
			{
				let toastSuccess = document.createElement('div')
				toastSuccess.classList.value = 'toast-message toast-success show'
				toastSuccess.innerHTML =  message;
				document.getElementsByTagName('body')[0].append(toastSuccess);
				setTimeout(()=>{ 
					toastSuccess.classList.remove("show");
					toastSuccess.remove();
					resolve('resolved');
				}, this.toastTimeout);
			}
			else if(status === 'warning')
			{
				let toastWarning = document.createElement('div')
				toastWarning.classList.value = 'toast-message toast-warning show'
				toastWarning.innerHTML =  message;
				document.getElementsByTagName('body')[0].append(toastWarning);
				setTimeout(()=>{ 
					toastWarning.classList.remove("show");
					toastWarning.remove();
					resolve('resolved');
				}, this.toastTimeout);
			}
		});
	}
}