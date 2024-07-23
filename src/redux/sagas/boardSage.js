import { takeLeading, delay, put } from 'redux-saga/effects';
import {
  resetBoard,
  resetBoardSagaRequested,
  resetBoardSagaFailed,
  resetBoardSagaSucceeded,
} from '../slices/boardSlice';
import { resetTodo } from '../slices/todoSlice';

function* resetBoardSaga() {
  try {
    yield delay(3000);
    yield put(resetBoard());
    yield put(resetTodo());

    yield put(resetBoardSagaSucceeded('secceeded'));
  } catch (error) {
    yield put(resetBoardSagaFailed(error));
  }
}

export function* saga() {
  yield takeLeading(resetBoardSagaRequested, resetBoardSaga);
}
