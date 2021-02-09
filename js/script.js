"use strict";

let  money,

	start = function() {
		do{
			money = prompt('Ваш месячный доход?' , 5000);
		}
		while(isNaN(money)  || money === " "  || money === null);
	};

	function isNumbers(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }

	let appData = {
		income: {},
		addIncome: [],
		expenses: {},
		deposit: false,
		mission: 50000,
		period: 5,
		budgetDay: 0,
		budgetMonth: 0,
		expensesMonth: 0,
		budget: money,
		asking: function() {
			let addExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую");
			appData.addExpenses  =   addExpenses.toLowerCase().split(',');
			appData.deposit = confirm("Есть ли у вас депозит в банке?"); //любое булево значение,

			let sum;//сумма
			
			for(let i = 0; i < 2; i++){
				let tempExpenses = prompt('Введите обязательную статью расходов?');
				
					do{
						sum = parseFloat(prompt('Во сколько это обойдётся?'));
					} while (!isNumbers(sum));//пока пользователь не введёт число
					appData.expenses[tempExpenses] = +sum;
			}
			return sum;
		},
		getExpensesMonth: function (){
			for ( let key in appData.expenses) {
				appData.expensesMonth += appData.expenses[key];
			}
			
		},
		getBudget: function () {

			appData.budgetMonth = appData.budget - appData.expensesMonth  ;
			 
			 appData.budgetDay = (appData.budgetMonth / 30);
			 return ;
		},
		getTargetMonth: function (){
			if(appData.budgetMonth > 0){
					let targetMonth = Math.ceil(appData.mission/appData.budgetMonth);
					console.log("Цель будет достигнута через " + targetMonth + " месяцев");
			} else  {
					console.log("Цель не будет достигнута");
			}
		},
		
		 getStatusIncome: function () {
			if (appData.budgetDay >= 1200) {
				return("У вас высокий уровень дохода");
			} else if (appData.budgetDay > 600 && appData.budgetDay < 1200) {
				return('У вас средний уровень дохода');
			} else if (appData.budgetDay <=600 && appData.budgetDay  > 0) {
				return('К сожалению у вас уровень дохода ниже среднего');
			} else if (appData.budgetDay < 0) {
				return('Что то пошло не так');
			}
		},
		

		
	};

	start();
	appData.asking();
	appData.getExpensesMonth();
	appData.getBudget();
// 
	console.log(appData.expenses);
	console.log(appData.getTargetMonth());
	console.log(appData.getStatusIncome());

	
	// console.log( 'Расходы за месяц ' + appData.expensesMonth);
	// console.log(  'за ' + appData.period + ' месяцев, будет достигнута цель');
	// console.log(appData.getStatusIncome());
	// for (let key in appData) {
  //   console.log(`Наша программа включает в себя данные: ${key}`);
	// }
