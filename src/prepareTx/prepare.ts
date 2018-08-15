import { Money, BigNumber } from '@waves/data-entities';
import { WAVES_ID, libs } from '@waves/waves-signature-generator';


export module prepare {

    export module processors {

        export function moneyToAssetId(money: Money): string {
            return money.asset.id;
        }

        export function moneyToNodeAssetId(money: Money): string {
            return idToNode(money.asset.id);
        }

        export function moneyToNumber(money: Money): number { // TODO Remove!
            return Number(money.toCoins());
        }

        export function moneyToBigNumberCoins(money: Money): BigNumber {
            return money.getCoins();
        }

        export function timestamp(time) {
            return (time && time instanceof Date ? time.getTime() : time) || Date.now();
        }

        export function orString(data) {
            return data || '';
        }

        export function noProcess(data) {
            return data;
        }

        export function recipient(data, code) {
            return data.length < 30 ? `alias:${code}:${data}` : data;
        }

        export function attachment(data: string) {
            data = data || '';
            const value = Uint8Array.from(libs.converters.stringToByteArray(data));
            return libs.base58.encode(Uint8Array.from(value));
        }

        export function bigNumberToNumber(num: BigNumber): number { // TODO Remove!
            return Number(num);
        }

        export function addValue(value: any) {
            return () => value;
        }

        export function expiration(date?) {
            return date || new Date().setDate(new Date().getDate() + 20);
        }

        export function transfers(recipient, amount) {
            return (transfers) => transfers.map((transfer) => ({
                recipient: recipient(transfer.recipient),
                amount: amount(transfer.amount)
            }));
        }

        export function quantity(data) {
            return bigNumberToNumber(new BigNumber(data.quantity).times(new BigNumber(10).pow(data.precision)));
        }
    }

    export function wrap(from: string, to: string, cb: any): IWrappedFunction {
        if (typeof cb != 'function') {
            return { from, to, cb: () => cb };
        }
        return { from, to, cb };
    }

    export interface IWrappedFunction {
        from: string;
        to: string;
        cb: Function;
    }

    export function schema(...args: Array<IWrappedFunction | string>) {
        return (data) => args.map((item) => {
            return typeof item === 'string' ? {
                key: item,
                value: processors.noProcess(data[item])
            } : {
                key: item.to,
                value: item.cb(item.from ? data[item.from] : data)
            };
        })
            .reduce((result, item) => {
                result[item.key] = item.value;
                return result;
            }, Object.create(null));
    }

    export function idToNode(id: string): string {
        return id === WAVES_ID ? '' : id;
    }
}
