import { SIGN_TYPE } from '../src/prepareTx';
import { Money } from '@waves/data-entities';
import { BtcAsset, TORCorp, INSTANTCOIN, WavesAsset } from './assets';
import { base58decode } from '@waves/waves-crypto';
import { BigNumber } from '@waves/data-entities/dist/libs/bignumber';


export const txs = {
    [SIGN_TYPE.ISSUE]: {
        2: {
            name: 'issure',
            data: {
                name: 'JUNKGOLD',
                senderPublicKey: 'E3ao18QtWEzm7hAbKQaoZNBRw6coj2NAy7opqbrqURFr',
                description: 'きらりと光る電子ゴミ。\nSparkling electronic waste.',
                quantity: new BigNumber(5300000000),
                precision: 2,
                reissuable: true,
                script: null,
                fee: Money.fromCoins(100000000, WavesAsset),
                timestamp: 1558497371511
            },
            id: 'EJbLEHhB5Sdbmpagug9nBDrBpAfgnTQomhL7xnsvvxS9',
            proof: '3Wgh9tuRdDwQXhAe63iabC5VojkPiJfKPm4tNaawGfpuGncTnT4zMTKzAH3QCjsZQ2c4sqDCyUjDpAAYBGeZLYFb'
        }
    },
    [SIGN_TYPE.REISSUE]: {
        2: {
            name: 'reissure',
            data: {
                assetId: 'CUrS6BkWPJVniWE7zh8LyN7PYehMa5WxSKUz3jaGdU2C',
                quantity: new BigNumber(9000000000),
                reissuable: true,
                senderPublicKey: 'CMxBthD1FH5kB597UY54jP3Q4LJr6LVnTFyajcEEkG46',
                fee: Money.fromTokens(1, WavesAsset),
                timestamp: new Date('2019-05-13T15:45:14.160Z'),
            },
            id: 'ApcQrPa5yE4PnS9h8aPWEfQpGBPcPP6j5czn6KPRcksc',
            proof: '5Gs7WhnoTALmA2rff6EyA3xM2tH8TFtfKgmEJdMEfFnDUiDnppTCWKgvXrdHRVBeE7g8yq6KJSxa2ZJ6C73BR7zg'
        }
    },
    [SIGN_TYPE.BURN]: {
        2: {
            name: 'burn',
            data: {
                senderPublicKey: 'BzeniWrmnD1qjoFjVnrYbSXwoiYNpKvaTkhpgwySM31Q',
                assetId: 'GouQ4XCiunWv8A8zJ6BCB9yyWHyFHREiqkuNYiATjJeW',
                amount: new BigNumber(1000000000000000000),
                timestamp: new Date(1558588376106),
            },
            fee: Money.fromCoins(100000, WavesAsset),
            id: 'EDpiFv8RL9B4o8HvG9uXeocerZ8eiUQ7W1VjGwr9Ld1X',
            proof: '5dZqaWVrEtC4QFdwsrTQmfnL4ivPdLA8Trmz8FvhNYax4V1apQxfMqaxEHmVKhyyTCX73ahzuFMx3AjbypFYpjg4',
        }
    },
    [SIGN_TYPE.TRANSFER]: {
        2: {
            name: 'transfer',
            data: {
                amount: Money.fromCoins(150200000, BtcAsset),
                attachment: base58decode('7KeHm8BxCSPdAQe947Lxff'),
                fee: Money.fromCoins(10000, TORCorp),
                recipient: '3PAs2qSeUAfgqSKS8LpZPKGYEjJKcud9Djr',
                sender: '3PQwUzCLuAG24xV7Bd6AMWCz4GEXyDix8Dz',
                senderPublicKey: 'AHLRHBJYtxwqjCcBYnFWeDco8hGJicWYrFd5yM5bWmNh',
                timestamp: new Date(1553167249572),
                version: 2
            },
            id: 'ETVSu3zPHGTh3JEyVGe48jEDgFYhm4KwMeKgvQdAQUyz',
            proof: '5mUv1RbNy3ToQyTMWtRT2WSLLBHoAFaWxXqrk1vjv38ytEPgZG5U694JgyeJKKuxKz8ZvUfFYUhYAZLatPn7Bumo'
        },
    },
    [SIGN_TYPE.LEASE]: {
        2: {
            data: {
                recipient: '3P3PfgFKpfisSW6RCsbmgWXtwUH8fHAESw4',
                senderPublicKey: '7QFRujJgBczYVM8Ey5hyAZeqVDNN56Fn1FFxAnjkiUnc',
                amount: Money.fromTokens(3.14220034, WavesAsset),
                fee: Money.fromTokens(0.001, WavesAsset),
                timestamp: new Date('2019-05-23T12:36:04.304Z'),
                version: 2,
            },
            id: '3N6RJ6JCJEvLcVFkojfSTUoJLVuhGVnXbae8DkvMUcft',
            proof: '2WyNnqkU2edRB1qAVgVsxSpm89wMoC9Zg1W52MShXsjtyEnNA5WRHmBXNSxNR8GERU34Bpeh4diqnKJdpt6Jcs3i'
        },
    },
    [SIGN_TYPE.CANCEL_LEASING]: {
        2: {
            data: {
                senderPublicKey: '4KZsRyZ9LVNBz6PM4CMLvEVm5oz3JepjUDuFumHx7oGJ',
                leaseId: 'Ag6o9tTqT85AxAwWxzbWR9MEBzxptGjM2h59sGNNPzeT',
                fee: Money.fromTokens(0.001, WavesAsset),
                timestamp: '2019-05-23T12:28:53.064Z',
                version: 2,
            },
            id: '6mJ7g8n7rVXcd1E5MuurZcYEfB5iH5N9wbNbwXz7Rhot',
            proof: 'dPz1HUk8FyxF6pBdPAy9QgTBwuZVrrs8aVnDpcovEpfp7P6ojSQbugnUR47ZviZitF4ASEzcxPyXMhSTg2VB3Vu',
        }
    },
    [SIGN_TYPE.CREATE_ALIAS]: {
        2: {
            data: {
                timestamp: new Date('2019-05-22T22:06:36.873Z'),
                version: 2,
                senderPublicKey: '5Dw7m2P8BJ9DsFWgKx5YN1ngPcKzrNrswYrqjMnFe1t8',
                alias: 'yes2yunos',
                fee: Money.fromTokens(0.001, WavesAsset),
            },
            id: 'FPPLnwckHW7koBLsuThp1rHB8PbZMzpySzndy6ziUga4',
            proof: '78VKQC7nvmMC6rfSDKX7kqoJ8UUAffeF8ScU6GevsMKHL2mgRDPiL2zLGumETZxCurdbDABDCzxNTwAAyTozFCD',
        }
    },
    [SIGN_TYPE.MASS_TRANSFER]: {
        1: {
            name: 'mass transfer',
            data: {
                totalAmount: Money.fromCoins(1000, INSTANTCOIN),
                transfers: [
                    {
                        amount: Money.fromCoins(500, INSTANTCOIN),
                        name: '3PAMHc8zS6aAG5j6fMQ56cuU9iuFQWfCCf6'
                    },
                    {
                        amount: Money.fromCoins(500, INSTANTCOIN),
                        name: '3P5bt6dBaafovNEZaiqehchHisx2QgU3pv4'
                    }],
                attachment: base58decode('9phjj2o13msVqLm8PdmcpLzWbRNJi6oKCY4mSuEN5pKKtQtqQc5M6r16txhfyhqFrMG49Kva9LGR1E94zHikcBqEL2La3'),
                fee: Money.fromCoins(200000, WavesAsset),
                sender: '3PQwUzCLuAG24xV7Bd6AMWCz4GEXyDix8Dz',
                senderPublicKey: '6Dugmm8rP7UsEZ1vN3y6s8MY2tfW5aGeJzpkozSR4rk5',
                timestamp: 1558529580270,
            },
            id: '4stWtcwjq16ZbpwjTP9tJvWFRgsKgHhqnPx6PjskaWEH',
            proof: '45rAeooSYbb4UtxfBfBxnQR6vBdud6KiLG77vMCUX6ibKKT4APeVFPZhbMT35JG8sxLhXc55WRw2iKbxZSuFWBDy'
        }
    },
    [SIGN_TYPE.DATA]: {
        1: {
            data: {
                version: 1,
                timestamp: '2019-05-17T16:02:48.062Z',
                senderPublicKey: '4q1NnuNeQAxsEnukCsAmkgaZR9fx8nLuexSBy8TVXgQr',
                fee: Money.fromTokens(0.001, WavesAsset),
                data: [
                    {
                        key: '3P6TxorzdA6yEG4orVU3Z7GbSeh4oq7k1Ko',
                        type: 'integer',
                        value: -3
                    }
                ]
            },
            id: 'HVBSz73gT2wemWBNd6rAUZfmvtP1f41PVwuwEUyfgXwV',
            proof: 'XFcT3ptaMDkMFMCDUUT7r7LuyaXi45AwUnTFauYVUzFVw27AT5oEAbYrzMZyGWnUeiav2BHwXctK7yd3SMhLVNP',
        }
    },
    [SIGN_TYPE.EXCHANGE]: {
        0: {
            data: {
                senderPublicKey: '7kPFrHDiGw1rCm7LPszuECwWYL3dMf6iMifLRDJQZMzy',
                fee: Money.fromCoins(300000, WavesAsset),
                timestamp: 1512075551784,
                version: 1,
                order1: {
                    version: 1,
                    id: 'HFe1UL2xF9q7T1vcxhSk5h6L53sQcM9eevvjtASe1Szs',
                    sender: '3PMajJ6WC4XR3RMr4raWainaKQpfRZLGHsV',
                    senderPublicKey: '3FQtBZWd2PYSRyehzDNEr1YQC29Vd5pCYqiN4nRhnxQK',
                    matcherPublicKey: '7kPFrHDiGw1rCm7LPszuECwWYL3dMf6iMifLRDJQZMzy',
                    assetPair: {
                        amountAsset: '474jTeYx2r2Va35794tCScAXWJG9hU2HcgxzMowaZUnu',
                        priceAsset: null
                    },
                    orderType: 'buy',
                    amount: 1230364480,
                    price: 8971734818,
                    timestamp: 1512075437685,
                    expiration: 1512161837685,
                    matcherFee: 300000,
                    signature: '4kh4HmFLCJnJuUfoCFir6G8GSiUcogVpMFEmUjpqutXqhpKFu5ECzxqQ3Kd1TxvtSN5aG35M76nrfvP7bt7UQ1k1',
                    proofs: [
                        '4kh4HmFLCJnJuUfoCFir6G8GSiUcogVpMFEmUjpqutXqhpKFu5ECzxqQ3Kd1TxvtSN5aG35M76nrfvP7bt7UQ1k1'
                    ]
                },
                order2: {
                    version: 1,
                    id: 'EBxTpRwrRPpSgEaH1Lco8B9wZwXYbxUHfggP1tPiSEfW',
                    sender: '3P5XQcyuAs3Fs4FcBXUrKPSQmfY6Zvse36L',
                    senderPublicKey: 'BwgywtnxBGBW53fRqa11K4KLcJkR4BMeu9o3jSB2KCGM',
                    matcherPublicKey: '7kPFrHDiGw1rCm7LPszuECwWYL3dMf6iMifLRDJQZMzy',
                    assetPair: {
                        amountAsset: '474jTeYx2r2Va35794tCScAXWJG9hU2HcgxzMowaZUnu',
                        priceAsset: null
                    },
                    orderType: 'sell',
                    amount: 49816000,
                    price: 8971734818,
                    timestamp: 1512075546319,
                    expiration: 1513803546319,
                    matcherFee: 300000,
                    signature: '2pY4uNy5yHWquYLyBWPCrBiMhNNELAoFTJtWuaXkdb2nMDgDnZUx85ierKAbDtjiE5isv3jTd5udNvm7tfqrDagY',
                    proofs: [
                        '2pY4uNy5yHWquYLyBWPCrBiMhNNELAoFTJtWuaXkdb2nMDgDnZUx85ierKAbDtjiE5isv3jTd5udNvm7tfqrDagY'
                    ]
                },
                amount: 49816000,
                price: 8971734818,
                buyMatcherFee: 12146,
                sellMatcherFee: 300000,
                height: 774422
            },
            id: '2yJZ6Uf6i3RnYdk268WkdJyUR3up9bUxjad1jrTCAiCr',
            proof: '5CNVuHcLak6GjTWvVo3t92y1ZDKeRHdSgedHP5VTg65fC8fAN2RrxDhWNmTP3QktvSQUGi7Z3WjUtVztmHnp7Afk',
        },
        2: {
            data: {
                senderPublicKey: 'E3UwaHCQCySghK3zwNB8EDHoc3b8uhzGPFz3gHmWon4W',
                timestamp: 1558620394055,
                version: 2,
                fee: Money.fromCoins(1800000, WavesAsset),
                buyMatcherFee: new BigNumber(699972),
                sellMatcherFee: new BigNumber(699972),
                price: new BigNumber(32178),
                amount: new BigNumber(63534092),
                buyOrder: {
                    id: '7yVER2gtyuozeo8jK3MXuced4nzSPVJ6b7P8ZpM1PhHk',
                    senderPublicKey: 'Cb92PCaMeimQmmK1dSaoUro3j8YhskKhH89JWdmsCkQX',
                    matcherPublicKey: 'E3UwaHCQCySghK3zwNB8EDHoc3b8uhzGPFz3gHmWon4W',
                    assetPair: {
                        amountAsset: 'WAVES',
                        priceAsset: '9SxLVHaEGTeEjRiAMnEw74YWWndQDRw8SZhknK9EYoUd'
                    },
                    orderType: 'buy',
                    price: 32178,
                    sender: '3PQxNpso2uNbiPM7PQWJMNeYkVsUv4P5mLm',
                    amount: 63536551,
                    timestamp: new Date('2019-05-23T14:06:33.872Z'),
                    expiration: new Date('2019-06-21T14:06:33.872Z'),
                    matcherFee: Money.fromCoins(700000, WavesAsset),
                    signature: '3174Hwa5RvLuT17myPiTCaxJzrLsccEmaTAP5Ppv9J5h9Fbtnq2pUwrEQ8fnKHg4iezNBmX59Tz8afeJhpVBDEcD'
                },
                sellOrder: {
                    id: '5UJvBH2NB2ZQWQUadiMsrMWExcKJk47a9DZSygs8vS7L',
                    senderPublicKey: '6TNqGk9VFwpNoUq6ZgfHGLpbGEgn5sfheirJF96FqHBT',
                    matcherPublicKey: 'E3UwaHCQCySghK3zwNB8EDHoc3b8uhzGPFz3gHmWon4W',
                    assetPair: {
                        amountAsset: 'WAVES',
                        priceAsset: '9SxLVHaEGTeEjRiAMnEw74YWWndQDRw8SZhknK9EYoUd'
                    },
                    orderType: 'sell',
                    price: 32178,
                    sender: '3PATy5UyBpYDVa9bGUe14o77zarXztprXfU',
                    amount: 63536551,
                    timestamp: new Date('2019-05-23T14:06:34.009Z'),
                    expiration: new Date('2019-06-21T14:06:34.009Z'),
                    matcherFee: Money.fromCoins(700000, WavesAsset),
                    signature: '4h8WDKtGRY9xjBemSSyMNS5Uizy2Fo55YNME8Q8pGMqBSjy7AoAjtFibMNjwLtmyLtcS1C1AMGGfe6Yov839MvE1'
                }
            },
            id: 'CCRGT4KTGzmf3rkirGTMRX29R3hYQTzL8vKSD5FPar5w',
            proof: '2gYMJ8KZS7QY5FAD6FV7Ynx4pmQS6GErD7FSKoLbGUTmkgdAevaSiK9UN5Hwc2xbMZjziZkgVjvSFx3mJpaDFSCp',
        },
    },
};
