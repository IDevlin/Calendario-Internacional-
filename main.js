
            const createCalendar = ({Year, locale}) => {
            
            
            
            const weekDays = [...Array(7).keys()]
            const intlWeekday = new Intl.DateTimeFormat(locale, {weekday: 'long'}) 
            
            
            weekDaysNames = weekDays.map(weekDayIndex => {
                const date = new Date(Year, 12, weekDayIndex + 1)
                weekDayName = intlWeekday.format(new Date(date))
                return weekDayName
            })

            const renderedWeekDays = weekDaysNames.map(weekDayName => 
              `<li class='day-name'>${weekDayName}</li>`).join('')
        
              
              const months = [...Array(12).keys()]
              const intl = new Intl.DateTimeFormat(locale, {month: 'long'})

              const calendar = months.map(monthKey => {
                const monthName = intl.format(new Date(Year, monthKey))
         
                const nextMonthIndex = monthKey + 1
                const daysOfMonth = new Date(Year, nextMonthIndex, 0).getDate()

                const startsOn = new Date(Year, monthKey, 2).getDay()

                return {
                    monthName,
                    daysOfMonth,
                    startsOn,
                }
            })

           console.log(calendar)
            
            const html = calendar.map(({daysOfMonth, monthName, startsOn}) => {
                const days = [...Array(daysOfMonth).keys()]
               const firtsDayAtributes = `class='first-day' style='--first-day-start: ${startsOn}'`

                const renderedDays = days.map((day, index) => `<li ${index === 0 ? firtsDayAtributes : ''}>${day + 1}</li>`).join('')

                const title = `<h1>${monthName} ${Year}</h1>`

                return `${title}<ol>${renderedWeekDays} ${renderedDays}</ol>`
            }).join('')

            document.querySelector('div').innerHTML = html
                
            }

            createCalendar({Year: 2022, locale: 'en'  })

            
   