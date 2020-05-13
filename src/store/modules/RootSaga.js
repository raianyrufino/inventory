import {call,  all, put, takeLatest} from 'redux-saga/effects'

/* retorna uma chamada para o all, neste all passamos uma array com
   todos os nossos sagas. */
export default function* rootSaga(){
    // return yeld all([
        
    // ]) 
}

/* O redux-saga funciona em cima do padrão generators, ele te permite esperar
que uma parte do código termine de ser executada para então continuar a execução daquele método*/