import "./Calendar.css"

export const Calendar = () => {
    return (
        <div>
            <h1 className="centered">Calendar</h1>
            <div style={{ width: "100%", display: "flex" }}>
                <iframe id="googleCalendar" title="Math Circle Calendar" src="https://calendar.google.com/calendar/embed?src=lkisc9ok5ujprh4tjopglhqn8k%40group.calendar.google.com&ctz=America%2FDenver" frameBorder="0" scrolling="no"></iframe>
            </div>
        </div>
    )
}