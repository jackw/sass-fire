# 🔥 Sass-fire 🔥

Sass functional programming exploration

---

![Build Status](https://drone.heywesty.com/api/badges/jackw/sass-fire/status.svg)
[![devDependency Status](https://david-dm.org/jackw/sass-fire/dev-status.svg)](https://david-dm.org/jackw/sass-fire#info=devDependencies)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

Read the complete documentation here: [jackw.github.io/sass-fire.io](https://jackw.github.io/sass-fire.io/)

_Disclaimer_ this project is more for my own learnings than anything.

What's available?

| Ramda function Name     | Sass-fire function name   | Implemented |
| ----------------------- | ------------------------- | ----------- |
| \_\_                    | \_\_                      | ❌          |
| add                     | add                       | ✅          |
| addIndex                | add-index                 | ❌          |
| adjust                  | adjust                    | ❌          |
| all                     | all                       | ❌          |
| allPass                 | all-pass                  | ✅          |
| always                  | always                    | ❌          |
| and                     | and                       | ❌          |
| andThen                 | and-then                  | ❌          |
| any                     | any                       | ❌          |
| anyPass                 | any-pass                  | ✅          |
| ap                      | ap                        | ❌          |
| aperture                | aperture                  | ✅          |
| append                  | append                    | ❌          |
| apply                   | apply                     | ❌          |
| applySpec               | apply-spec                | ❌          |
| applyTo                 | apply-to                  | ❌          |
| ascend                  | ascend                    | ❌          |
| assoc                   | assoc                     | ✅          |
| assocPath               | assoc-path                | ❌          |
| binary                  | binary                    | ❌          |
| bind                    | bind                      | ❌          |
| both                    | both                      | ❌          |
| call                    | call                      | ❌          |
| chain                   | chain                     | ❌          |
| clamp                   | clamp                     | ❌          |
| clone                   | clone                     | ❌          |
| comparator              | comparator                | ❌          |
| complement              | complement                | ❌          |
| compose                 | compose                   | ✅          |
| composeK                | compose-k                 | ❌          |
| composeP                | compose-p                 | ❌          |
| composeWith             | compose-with              | ❌          |
| concat                  | concat                    | ✅          |
| cond                    | cond                      | ❌          |
| construct               | construct                 | ❌          |
| constructN              | construct-n               | ❌          |
| contains                | contains                  | ❌          |
| converge                | converge                  | ❌          |
| countBy                 | count-by                  | ❌          |
| curry                   | curry                     | ❌          |
| curryN                  | curry-n                   | ❌          |
| dec                     | dec                       | ✅          |
| defaultTo               | default-to                | ❌          |
| descend                 | descend                   | ❌          |
| difference              | difference                | ❌          |
| differenceWith          | difference-with           | ❌          |
| dissoc                  | dissoc                    | ✅          |
| dissocPath              | dissoc-path               | ❌          |
| divide                  | divide                    | ✅          |
| drop                    | drop                      | ❌          |
| dropLast                | drop-last                 | ❌          |
| dropLastWhile           | drop-last-while           | ❌          |
| dropRepeats             | drop-repeats              | ❌          |
| dropRepeatsWith         | drop-repeats-with         | ❌          |
| dropWhile               | drop-while                | ❌          |
| either                  | either                    | ❌          |
| empty                   | empty                     | ❌          |
| endsWith                | ends-with                 | ❌          |
| eqBy                    | eq-by                     | ✅          |
| eqProps                 | eq-props                  | ❌          |
| equals                  | equals                    | ✅          |
| evolve                  | evolve                    | ❌          |
| F                       | f                         | ✅          |
| filter                  | filter                    | ✅          |
| find                    | find                      | ✅          |
| findIndex               | find-index                | ❌          |
| findLast                | find-last                 | ❌          |
| findLastIndex           | find-last-index           | ❌          |
| flatten                 | flatten                   | ❌          |
| flip                    | flip                      | ❌          |
| forEach                 | for-each                  | ❌          |
| forEachObjIndexed       | for-each-obj-indexed      | ❌          |
| fromPairs               | from-pairs                | ❌          |
| groupBy                 | group-by                  | ❌          |
| groupWith               | group-with                | ❌          |
| gt                      | gt                        | ✅          |
| gte                     | gte                       | ✅          |
| has                     | has                       | ✅          |
| hasIn                   | has-in                    | ❌          |
| hasPath                 | has-path                  | ✅          |
| head                    | head                      | ✅          |
| identical               | identical                 | ❌          |
| identity                | identity                  | ✅          |
| ifElse                  | if-else                   | ❌          |
| inc                     | inc                       | ✅          |
| includes                | includes                  | ✅          |
| indexBy                 | index-by                  | ❌          |
| indexOf                 | index-of                  | ❌          |
| init                    | init                      | ✅          |
| innerJoin               | inner-join                | ✅          |
| insert                  | insert                    | ❌          |
| insertAll               | insert-all                | ❌          |
| intersection            | intersection              | ✅          |
| intersperse             | intersperse               | ❌          |
| into                    | into                      | ❌          |
| invert                  | invert                    | ❌          |
| invertObj               | invert-obj                | ❌          |
| invoker                 | invoker                   | ❌          |
| is                      | is                        | ❌          |
| isEmpty                 | is-empty                  | ❌          |
| isNil                   | is-nil                    | ❌          |
| join                    | implode                   | ✅          |
| juxt                    | juxt                      | ❌          |
| keys                    | keys                      | ❌          |
| keysIn                  | keys-in                   | ❌          |
| last                    | last                      | ✅          |
| lastIndexOf             | last-index-of             | ❌          |
| length                  | length                    | ❌          |
| lens                    | lens                      | ❌          |
| lensIndex               | lens-index                | ❌          |
| lensPath                | lens-path                 | ❌          |
| lensProp                | lens-prop                 | ❌          |
| lift                    | lift                      | ❌          |
| liftN                   | lift-n                    | ❌          |
| lt                      | lt                        | ✅          |
| lte                     | lte                       | ✅          |
| map                     | map                       | ✅          |
| mapAccum                | map-accum                 | ❌          |
| mapAccumRight           | map-accum-right           | ❌          |
| mapObjIndexed           | map-obj-indexed           | ❌          |
| match                   | match                     | ❌          |
| mathMod                 | math-mod                  | ❌          |
| max                     | max                       | ❌          |
| maxBy                   | max-by                    | ❌          |
| mean                    | mean                      | ✅          |
| median                  | median                    | ✅          |
| memoizeWith             | memoize-with              | ❌          |
| merge                   | merge                     | ✅          |
| mergeAll                | merge-all                 | ✅          |
| mergeDeepLeft           | merge-deep-left           | ✅          |
| mergeDeepRight          | merge-deep-right          | ✅          |
| mergeDeepWith           | merge-deep-with           | ✅          |
| mergeDeepWithKey        | merge-deep-with-key       | ✅          |
| mergeLeft               | merge-left                | ✅          |
| mergeRight              | merge-right               | ✅          |
| mergeWith               | merge-with                | ✅          |
| mergeWithKey            | merge-with-key            | ✅          |
| min                     | min                       | ❌          |
| minBy                   | min-by                    | ❌          |
| modulo                  | modulo                    | ❌          |
| move                    | move                      | ❌          |
| multiply                | multiply                  | ✅          |
| nAry                    | n-ary                     | ❌          |
| negate                  | negate                    | ✅          |
| none                    | none                      | ❌          |
| not                     | not                       | ❌          |
| nth                     | nth                       | ❌          |
| nthArg                  | nth-arg                   | ❌          |
| o                       | o                         | ❌          |
| objOf                   | obj-of                    | ❌          |
| of                      | of                        | ❌          |
| omit                    | omit                      | ✅          |
| once                    | once                      | ❌          |
| or                      | or                        | ❌          |
| otherwise               | otherwise                 | ❌          |
| over                    | over                      | ❌          |
| pair                    | pair                      | ❌          |
| partial                 | partial                   | ❌          |
| partialRight            | partial-right             | ❌          |
| partition               | partition                 | ✅          |
| path                    | path                      | ✅          |
| pathEq                  | path-eq                   | ✅          |
| pathOr                  | path-or                   | ✅          |
| paths                   | paths                     | ✅          |
| pathSatisfies           | path-satisfies            | ✅          |
| pick                    | pick                      | ✅          |
| pickAll                 | pick-all                  | ❌          |
| pickBy                  | pick-by                   | ❌          |
| pipe                    | pipe                      | ✅          |
| pipeK                   | pipe-k                    | ❌          |
| pipeP                   | pipe-p                    | ❌          |
| pipeWith                | pipe-with                 | ❌          |
| pluck                   | pluck                     | ❌          |
| prepend                 | prepend                   | ✅          |
| product                 | product                   | ✅          |
| project                 | project                   | ❌          |
| prop                    | prop                      | ✅          |
| propEq                  | prop-eq                   | ✅          |
| propIs                  | prop-is                   | ❌          |
| propOr                  | prop-or                   | ❌          |
| props                   | props                     | ✅          |
| propSatisfies           | prop-satisfies            | ❌          |
| range                   | range                     | ❌          |
| reduce                  | reduce                    | ✅          |
| reduceBy                | reduce-by                 | ❌          |
| reduced                 | reduced                   | ❌          |
| reduceRight             | reduce-right              | ❌          |
| reduceWhile             | reduce-while              | ❌          |
| reject                  | reject                    | ✅          |
| remove                  | remove                    | ❌          |
| repeat                  | repeat                    | ❌          |
| replace                 | replace                   | ❌          |
| reverse                 | reverse                   | ❌          |
| scan                    | scan                      | ❌          |
| sequence                | sequence                  | ❌          |
| set                     | set                       | ❌          |
| slice                   | slice                     | ✅          |
| sort                    | sort                      | ❌          |
| sortBy                  | sort-by                   | ❌          |
| sortWith                | sort-with                 | ❌          |
| split                   | split                     | ✅          |
| splitAt                 | split-at                  | ❌          |
| splitEvery              | split-every               | ✅          |
| splitWhen               | split-when                | ❌          |
| startsWith              | starts-with               | ❌          |
| subtract                | subtract                  | ✅          |
| sum                     | sum                       | ❌          |
| symmetricDifference     | symmetric-difference      | ❌          |
| symmetricDifferenceWith | symmetric-difference-with | ❌          |
| T                       | t                         | ✅          |
| tail                    | tail                      | ✅          |
| take                    | take                      | ❌          |
| takeLast                | take-last                 | ❌          |
| takeLastWhile           | take-last-while           | ❌          |
| takeWhile               | take-while                | ❌          |
| tap                     | tap                       | ❌          |
| test                    | test                      | ❌          |
| thunkify                | thunkify                  | ❌          |
| times                   | times                     | ❌          |
| toLower                 | to-lower                  | ❌          |
| toPairs                 | to-pairs                  | ❌          |
| toPairsIn               | to-pairs-in               | ❌          |
| toString                | to-string                 | ❌          |
| toUpper                 | to-upper                  | ❌          |
| transduce               | transduce                 | ❌          |
| transpose               | transpose                 | ❌          |
| traverse                | traverse                  | ❌          |
| trim                    | trim                      | ✅          |
| tryCatch                | try-catch                 | ❌          |
| type                    | type                      | ❌          |
| unapply                 | unapply                   | ❌          |
| unary                   | unary                     | ❌          |
| uncurryN                | uncurry-n                 | ❌          |
| unfold                  | unfold                    | ❌          |
| union                   | union                     | ❌          |
| unionWith               | union-with                | ❌          |
| uniq                    | uniq                      | ✅          |
| uniqBy                  | uniq-by                   | ❌          |
| uniqWith                | uniq-with                 | ❌          |
| unless                  | unless                    | ❌          |
| unnest                  | unnest                    | ❌          |
| until                   | until                     | ❌          |
| update                  | update                    | ❌          |
| useWith                 | use-with                  | ❌          |
| values                  | values                    | ❌          |
| valuesIn                | values-in                 | ❌          |
| view                    | view                      | ❌          |
| when                    | when                      | ❌          |
| where                   | where                     | ❌          |
| whereEq                 | where-eq                  | ❌          |
| without                 | without                   | ✅          |
| xor                     | xor                       | ❌          |
| xprod                   | xprod                     | ❌          |
| zip                     | zip                       | ❌          |
| zipObj                  | zip-obj                   | ❌          |
| zipWith                 | zip-with                  | ❌          |
