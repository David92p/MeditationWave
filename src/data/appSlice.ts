import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Language = "ENG" | "ITA"

type Header = "La meditazione non è un'evasione ma un incontrosereno con la realtà." | "Meditation is not an escape but a peaceful encounter with reality."
type Par1 = 
`Come si medita? Come posso imparare a meditare in poco tempo? Queste due sono senza dubbio le domande che mi vengono poste più spesso da amici, parenti e allievi. Non è facile rispondere in poche parole e con facilità a questa richiesta, io stesso ho impiegato decenni a comprendere e padroneggiare la meditazione e le sue numerose tecniche.` |
`How do you meditate? How can I learn to meditate quickly? These two are undoubtedly the questions I am asked most often by friends, relatives and students. It is not easy to answer this request in a few words and with ease. I myself have spent decades understanding and mastering meditation and its many techniques.`
type Par2 = 
`La meditazione può essere definita come un insieme di tecniche che hanno lo scopo di incoraggiare un elevato stato di consapevolezza e di attenzione focalizzata. La meditazione porta, nel lungo termine, a un cambiamento della coscienza che ha dimostrato di avere molti benefici sul benessere psicologico.` |
`Meditation can be defined as a set of techniques that aim to encourage a heightened state of awareness and focused attention. Meditation leads, in the long term, to a change in consciousness which has been shown to have many benefits on psychological well-being.`
interface initialState {
    language: Language
    darkMode: boolean
    header: Header
    par1: Par1
    par2: Par2
}

const initialState:initialState = {
    language: "ENG",
    darkMode: true,
    header: "Meditation is not an escape but a peaceful encounter with reality.", 
    par1: "How do you meditate? How can I learn to meditate quickly? These two are undoubtedly the questions I am asked most often by friends, relatives and students. It is not easy to answer this request in a few words and with ease. I myself have spent decades understanding and mastering meditation and its many techniques.",
    par2: "Meditation can be defined as a set of techniques that aim to encourage a heightened state of awareness and focused attention. Meditation leads, in the long term, to a change in consciousness which has been shown to have many benefits on psychological well-being."
};

const globalSlice = createSlice({
    name: "global",
    initialState,
    reducers: {
        changeLanguage: (state, action: PayloadAction<Language>) => {
            state.language = action.payload
            switch (action.payload){
                case "ENG":
                    state.header = "Meditation is not an escape but a peaceful encounter with reality."
                    state.par1 = "How do you meditate? How can I learn to meditate quickly? These two are undoubtedly the questions I am asked most often by friends, relatives and students. It is not easy to answer this request in a few words and with ease. I myself have spent decades understanding and mastering meditation and its many techniques."
                    state.par2 = "Meditation can be defined as a set of techniques that aim to encourage a heightened state of awareness and focused attention. Meditation leads, in the long term, to a change in consciousness which has been shown to have many benefits on psychological well-being."
                    break
                case "ITA":
                    state.header = "La meditazione non è un'evasione ma un incontrosereno con la realtà."   
                    state.par1 = "Come si medita? Come posso imparare a meditare in poco tempo? Queste due sono senza dubbio le domande che mi vengono poste più spesso da amici, parenti e allievi. Non è facile rispondere in poche parole e con facilità a questa richiesta, io stesso ho impiegato decenni a comprendere e padroneggiare la meditazione e le sue numerose tecniche."
                    state.par2 = "La meditazione può essere definita come un insieme di tecniche che hanno lo scopo di incoraggiare un elevato stato di consapevolezza e di attenzione focalizzata. La meditazione porta, nel lungo termine, a un cambiamento della coscienza che ha dimostrato di avere molti benefici sul benessere psicologico."
                    break
            }
        },
        changeDarkMode: (state, action: PayloadAction<boolean>) => {
            state.darkMode = action.payload
        }   
    },
});

export default globalSlice