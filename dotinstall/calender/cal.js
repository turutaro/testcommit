'use strict'
{
    const today = new Date();
    let year = today.getFullYear();
    let month = today.getMonth();

    const getCalenderHead = () => {
        const dates = [];
        const d = new Date(year, month, 0).getDate();
        const n = new Date(year, month, 1).getDay();

        for (let i = 0; i < n; i++) {
            dates.unshift({
                date: d - i,
                isToday: false,
                isDisabled: true,
            });
        }
        return dates;
    }

    const getCalenderBody = () => {
        const dates = [];
        const lastDate = new Date(year, month + 1, 0).getDate();

        for (let i = 1; i <= lastDate; i++) {
            dates.push({
                date: i,
                isToday: false,
                isDisabled: false,
            });
        }

        if (year === today.getFullYear() && month === today.getMonth()){
            dates[today.getDate() - 1].isToday = true;
        }

        return dates;
    }

    const getCalenderTail = () => {
        const dates = [];
        const lastDay = new Date(year, month + 1, 0).getDay();

        for (let i = 1; i < 7 - lastDay; i++) {
            dates.push({
                date: i,
                isToday: false,
                isDisabled: true,
            })
        }
        return dates;
    }

    const clearCalender = () => {
        const tbody = document.querySelector('tbody');

        while (tbody.firstChild) {
            tbody.removeChild(tbody.firstChild); 
        }
    }

    const renderTitle = () => {
        const title = `${year}/${String(month + 1).padStart(2, '0')}`;
        document.getElementById('title').textContent = title; 
    }

    const renderWeeks = () => {
        const dates = [
            ...getCalenderHead(),
            ...getCalenderBody(),
            ...getCalenderTail(),
        ];

        const weeks = [];
        const weeksCounts = dates.length / 7;

        for (let i = 0; i < weeksCounts; i++) {
            weeks.push(dates.splice(0,7));
        }

        weeks.forEach(week => {
            const tr = document.createElement('tr');
            week.forEach(date => {
                const td = document.createElement('td');
               
                td.textContent = date.date;
                if (date.isToday) {
                    td.classList.add('today');
                }
                if (date.isDisabled) {
                    td.classList.add('disabled');
                }
                tr.appendChild(td);
            });
            document.querySelector('tbody').appendChild(tr);
        });
    }

    const cleateClender = () => {

        clearCalender();
        renderTitle();
        renderWeeks();
    }

    document.getElementById('prev').addEventListener('click', () => {
        month--;
        if (month < 0) {
            year--;
            month = 11;
        }

        cleateClender();
    });

    document.getElementById('next').addEventListener('click', () => {
        month++;
        if (month > 11) {
            year++;
            month = 0;
        }

        cleateClender();
    });

    document.getElementById('today').addEventListener('click', () => {
        year = today.getFullYear();
        month = today.getMonth();

        cleateClender();
    });
   
   cleateClender();
}