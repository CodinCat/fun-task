// @flow

import _test from 'lobot/test'
import Task from '../src'

const test = _test.wrap('of')

test('passes value to cb', 1, t => {
  Task.of(2).run(t.calledWith(2))
})
