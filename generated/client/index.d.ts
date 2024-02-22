/**
 * Client
 **/

import * as runtime from "./runtime/library";

import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model Campaign
 *
 */
export type Campaign = $Result.DefaultSelection<Prisma.$CampaignPayload>;
/**
 * Model AdSet
 *
 */
export type AdSet = $Result.DefaultSelection<Prisma.$AdSetPayload>;
/**
 * Model Ad
 *
 */
export type Ad = $Result.DefaultSelection<Prisma.$AdPayload>;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Campaigns
 * const campaigns = await prisma.campaign.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = "log" extends keyof T
    ? T["log"] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<T["log"]>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>["other"] };

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Campaigns
   * const campaigns = await prisma.campaign.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(
    eventType: V,
    callback: (
      event: V extends "query" ? Prisma.QueryEvent : Prisma.LogEvent,
    ) => void,
  ): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void;

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(
    query: string,
    ...values: any[]
  ): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(
    query: TemplateStringsArray | Prisma.Sql,
    ...values: any[]
  ): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(
    query: string,
    ...values: any[]
  ): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (
      prisma: Omit<PrismaClient, runtime.ITXClientDenyList>,
    ) => $Utils.JsPromise<R>,
    options?: {
      maxWait?: number;
      timeout?: number;
      isolationLevel?: Prisma.TransactionIsolationLevel;
    },
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>;

  /**
   * `prisma.campaign`: Exposes CRUD operations for the **Campaign** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Campaigns
   * const campaigns = await prisma.campaign.findMany()
   * ```
   */
  get campaign(): Prisma.CampaignDelegate<ExtArgs>;

  /**
   * `prisma.adSet`: Exposes CRUD operations for the **AdSet** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more AdSets
   * const adSets = await prisma.adSet.findMany()
   * ```
   */
  get adSet(): Prisma.AdSetDelegate<ExtArgs>;

  /**
   * `prisma.ad`: Exposes CRUD operations for the **Ad** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Ads
   * const ads = await prisma.ad.findMany()
   * ```
   */
  get ad(): Prisma.AdDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;
  export import NotFoundError = runtime.NotFoundError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics;
  export type Metric<T> = runtime.Metric<T>;
  export type MetricHistogram = runtime.MetricHistogram;
  export type MetricHistogramBucket = runtime.MetricHistogramBucket;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 5.7.0
   * Query Engine version: 79fb5193cf0a8fdbef536e4b4a159cad677ab1b9
   */
  export type PrismaVersion = {
    client: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from.
   */
  export type JsonObject = { [Key in string]?: JsonValue };

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue =
    | string
    | number
    | boolean
    | JsonObject
    | JsonArray
    | null;

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {
    readonly [Key in string]?: InputJsonValue | null;
  };

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray
    extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue =
    | string
    | number
    | boolean
    | InputJsonObject
    | InputJsonArray
    | { toJSON(): unknown };

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
     * Type of `Prisma.DbNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class DbNull {
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<
    infer U
  >
    ? U
    : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<
    T extends (...args: any) => $Utils.JsPromise<any>,
  > = PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude
    ? "Please either choose `select` or `include`."
    : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object
    ? U extends object
      ? (Without<T, U> & U) | (Without<U, T> & T)
      : U
    : T;

  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
    ? False
    : T extends Date
      ? False
      : T extends Uint8Array
        ? False
        : T extends bigint
          ? False
          : T extends object
            ? True
            : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<
    __Either<O, K>
  >;

  type _Either<O extends object, K extends Key, strict extends boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<
    O extends object,
    K extends Key,
    strict extends boolean = 1,
  > = O extends unknown ? _Either<O, K, strict> : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O
    ? O[K]
    : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown
    ? AtStrict<O, K>
    : never;
  export type At<
    O extends object,
    K extends Key,
    strict extends boolean = 1,
  > = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
        [K in keyof A]: A[K];
      } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
      ?
          | (K extends keyof O ? { [P in K]: O[P] } & O : O)
          | ({ [P in keyof O as P extends K ? K : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown
    ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>>
    : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
      ? 1
      : 0;

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >;

  export type Or<B1 extends boolean, B2 extends boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<
    T,
    U = Omit<T, "_avg" | "_sum" | "_count" | "_min" | "_max">,
  > = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<"OR", K>, Extends<"AND", K>>,
      Extends<"NOT", K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<
            UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never
          >
        : never
      : {} extends FieldPaths<T[K]>
        ? never
        : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<
    T,
    K extends Enumerable<keyof T> | keyof T,
  > = Prisma__Pick<T, MaybeTupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}`
    ? never
    : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never
    ? never
    : FieldRef<Model, FieldType>;

  export const ModelName: {
    Campaign: "Campaign";
    AdSet: "AdSet";
    Ad: "Ad";
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  export type Datasources = {
    db?: Datasource;
  };

  interface TypeMapCb
    extends $Utils.Fn<
      { extArgs: $Extensions.InternalArgs },
      $Utils.Record<string, any>
    > {
    returns: Prisma.TypeMap<this["params"]["extArgs"]>;
  }

  export type TypeMap<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    meta: {
      modelProps: "campaign" | "adSet" | "ad";
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      Campaign: {
        payload: Prisma.$CampaignPayload<ExtArgs>;
        fields: Prisma.CampaignFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.CampaignFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.CampaignFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>;
          };
          findFirst: {
            args: Prisma.CampaignFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.CampaignFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>;
          };
          findMany: {
            args: Prisma.CampaignFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>[];
          };
          create: {
            args: Prisma.CampaignCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>;
          };
          createMany: {
            args: Prisma.CampaignCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.CampaignDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>;
          };
          update: {
            args: Prisma.CampaignUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>;
          };
          deleteMany: {
            args: Prisma.CampaignDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.CampaignUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.CampaignUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>;
          };
          aggregate: {
            args: Prisma.CampaignAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateCampaign>;
          };
          groupBy: {
            args: Prisma.CampaignGroupByArgs<ExtArgs>;
            result: $Utils.Optional<CampaignGroupByOutputType>[];
          };
          count: {
            args: Prisma.CampaignCountArgs<ExtArgs>;
            result: $Utils.Optional<CampaignCountAggregateOutputType> | number;
          };
        };
      };
      AdSet: {
        payload: Prisma.$AdSetPayload<ExtArgs>;
        fields: Prisma.AdSetFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.AdSetFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AdSetPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.AdSetFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AdSetPayload>;
          };
          findFirst: {
            args: Prisma.AdSetFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AdSetPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.AdSetFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AdSetPayload>;
          };
          findMany: {
            args: Prisma.AdSetFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AdSetPayload>[];
          };
          create: {
            args: Prisma.AdSetCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AdSetPayload>;
          };
          createMany: {
            args: Prisma.AdSetCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.AdSetDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AdSetPayload>;
          };
          update: {
            args: Prisma.AdSetUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AdSetPayload>;
          };
          deleteMany: {
            args: Prisma.AdSetDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.AdSetUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.AdSetUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AdSetPayload>;
          };
          aggregate: {
            args: Prisma.AdSetAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateAdSet>;
          };
          groupBy: {
            args: Prisma.AdSetGroupByArgs<ExtArgs>;
            result: $Utils.Optional<AdSetGroupByOutputType>[];
          };
          count: {
            args: Prisma.AdSetCountArgs<ExtArgs>;
            result: $Utils.Optional<AdSetCountAggregateOutputType> | number;
          };
        };
      };
      Ad: {
        payload: Prisma.$AdPayload<ExtArgs>;
        fields: Prisma.AdFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.AdFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AdPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.AdFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AdPayload>;
          };
          findFirst: {
            args: Prisma.AdFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AdPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.AdFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AdPayload>;
          };
          findMany: {
            args: Prisma.AdFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AdPayload>[];
          };
          create: {
            args: Prisma.AdCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AdPayload>;
          };
          createMany: {
            args: Prisma.AdCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.AdDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AdPayload>;
          };
          update: {
            args: Prisma.AdUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AdPayload>;
          };
          deleteMany: {
            args: Prisma.AdDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.AdUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.AdUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$AdPayload>;
          };
          aggregate: {
            args: Prisma.AdAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateAd>;
          };
          groupBy: {
            args: Prisma.AdGroupByArgs<ExtArgs>;
            result: $Utils.Optional<AdGroupByOutputType>[];
          };
          count: {
            args: Prisma.AdCountArgs<ExtArgs>;
            result: $Utils.Optional<AdCountAggregateOutputType> | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<
    "define",
    Prisma.TypeMapCb,
    $Extensions.DefaultArgs
  >;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = "pretty" | "colorless" | "minimal";
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string;
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[];
  }

  /* Types for Logging */
  export type LogLevel = "info" | "query" | "warn" | "error";
  export type LogDefinition = {
    level: LogLevel;
    emit: "stdout" | "event";
  };

  export type GetLogType<T extends LogLevel | LogDefinition> =
    T extends LogDefinition
      ? T["emit"] extends "event"
        ? T["level"]
        : never
      : never;
  export type GetEvents<T extends any> = T extends Array<
    LogLevel | LogDefinition
  >
    ? GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
  /* End Types for Logging */

  export type PrismaAction =
    | "findUnique"
    | "findUniqueOrThrow"
    | "findMany"
    | "findFirst"
    | "findFirstOrThrow"
    | "create"
    | "createMany"
    | "update"
    | "updateMany"
    | "upsert"
    | "delete"
    | "deleteMany"
    | "executeRaw"
    | "queryRaw"
    | "aggregate"
    | "count"
    | "runCommandRaw"
    | "findRaw"
    | "groupBy";

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName;
    action: PrismaAction;
    args: any;
    dataPath: string[];
    runInTransaction: boolean;
  };

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>;

  // tested in getLogLevel.test.ts
  export function getLogLevel(
    log: Array<LogLevel | LogDefinition>,
  ): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<
    Prisma.DefaultPrismaClient,
    runtime.ITXClientDenyList
  >;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type CampaignCountOutputType
   */

  export type CampaignCountOutputType = {
    adSets: number;
  };

  export type CampaignCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    adSets?: boolean | CampaignCountOutputTypeCountAdSetsArgs;
  };

  // Custom InputTypes

  /**
   * CampaignCountOutputType without action
   */
  export type CampaignCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the CampaignCountOutputType
     */
    select?: CampaignCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * CampaignCountOutputType without action
   */
  export type CampaignCountOutputTypeCountAdSetsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: AdSetWhereInput;
  };

  /**
   * Count Type AdSetCountOutputType
   */

  export type AdSetCountOutputType = {
    ads: number;
  };

  export type AdSetCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    ads?: boolean | AdSetCountOutputTypeCountAdsArgs;
  };

  // Custom InputTypes

  /**
   * AdSetCountOutputType without action
   */
  export type AdSetCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AdSetCountOutputType
     */
    select?: AdSetCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * AdSetCountOutputType without action
   */
  export type AdSetCountOutputTypeCountAdsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: AdWhereInput;
  };

  /**
   * Models
   */

  /**
   * Model Campaign
   */

  export type AggregateCampaign = {
    _count: CampaignCountAggregateOutputType | null;
    _avg: CampaignAvgAggregateOutputType | null;
    _sum: CampaignSumAggregateOutputType | null;
    _min: CampaignMinAggregateOutputType | null;
    _max: CampaignMaxAggregateOutputType | null;
  };

  export type CampaignAvgAggregateOutputType = {
    id: number | null;
    daily_budget: number | null;
  };

  export type CampaignSumAggregateOutputType = {
    id: number | null;
    daily_budget: number | null;
  };

  export type CampaignMinAggregateOutputType = {
    id: number | null;
    name: string | null;
    status: string | null;
    buying_type: string | null;
    objective: string | null;
    special_ad_categories: string | null;
    start_time: Date | null;
    end_time: Date | null;
    daily_budget: number | null;
    campaign_type: string | null;
    creation_date: Date | null;
    campaign_id: string | null;
  };

  export type CampaignMaxAggregateOutputType = {
    id: number | null;
    name: string | null;
    status: string | null;
    buying_type: string | null;
    objective: string | null;
    special_ad_categories: string | null;
    start_time: Date | null;
    end_time: Date | null;
    daily_budget: number | null;
    campaign_type: string | null;
    creation_date: Date | null;
    campaign_id: string | null;
  };

  export type CampaignCountAggregateOutputType = {
    id: number;
    name: number;
    status: number;
    buying_type: number;
    objective: number;
    special_ad_categories: number;
    start_time: number;
    end_time: number;
    daily_budget: number;
    target: number;
    campaign_type: number;
    creation_date: number;
    campaign_id: number;
    _all: number;
  };

  export type CampaignAvgAggregateInputType = {
    id?: true;
    daily_budget?: true;
  };

  export type CampaignSumAggregateInputType = {
    id?: true;
    daily_budget?: true;
  };

  export type CampaignMinAggregateInputType = {
    id?: true;
    name?: true;
    status?: true;
    buying_type?: true;
    objective?: true;
    special_ad_categories?: true;
    start_time?: true;
    end_time?: true;
    daily_budget?: true;
    campaign_type?: true;
    creation_date?: true;
    campaign_id?: true;
  };

  export type CampaignMaxAggregateInputType = {
    id?: true;
    name?: true;
    status?: true;
    buying_type?: true;
    objective?: true;
    special_ad_categories?: true;
    start_time?: true;
    end_time?: true;
    daily_budget?: true;
    campaign_type?: true;
    creation_date?: true;
    campaign_id?: true;
  };

  export type CampaignCountAggregateInputType = {
    id?: true;
    name?: true;
    status?: true;
    buying_type?: true;
    objective?: true;
    special_ad_categories?: true;
    start_time?: true;
    end_time?: true;
    daily_budget?: true;
    target?: true;
    campaign_type?: true;
    creation_date?: true;
    campaign_id?: true;
    _all?: true;
  };

  export type CampaignAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Campaign to aggregate.
     */
    where?: CampaignWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Campaigns to fetch.
     */
    orderBy?:
      | CampaignOrderByWithRelationInput
      | CampaignOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: CampaignWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Campaigns from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Campaigns.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Campaigns
     **/
    _count?: true | CampaignCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: CampaignAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: CampaignSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: CampaignMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: CampaignMaxAggregateInputType;
  };

  export type GetCampaignAggregateType<T extends CampaignAggregateArgs> = {
    [P in keyof T & keyof AggregateCampaign]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCampaign[P]>
      : GetScalarType<T[P], AggregateCampaign[P]>;
  };

  export type CampaignGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: CampaignWhereInput;
    orderBy?:
      | CampaignOrderByWithAggregationInput
      | CampaignOrderByWithAggregationInput[];
    by: CampaignScalarFieldEnum[] | CampaignScalarFieldEnum;
    having?: CampaignScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CampaignCountAggregateInputType | true;
    _avg?: CampaignAvgAggregateInputType;
    _sum?: CampaignSumAggregateInputType;
    _min?: CampaignMinAggregateInputType;
    _max?: CampaignMaxAggregateInputType;
  };

  export type CampaignGroupByOutputType = {
    id: number;
    name: string;
    status: string;
    buying_type: string;
    objective: string;
    special_ad_categories: string;
    start_time: Date;
    end_time: Date;
    daily_budget: number;
    target: JsonValue;
    campaign_type: string;
    creation_date: Date;
    campaign_id: string;
    _count: CampaignCountAggregateOutputType | null;
    _avg: CampaignAvgAggregateOutputType | null;
    _sum: CampaignSumAggregateOutputType | null;
    _min: CampaignMinAggregateOutputType | null;
    _max: CampaignMaxAggregateOutputType | null;
  };

  type GetCampaignGroupByPayload<T extends CampaignGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<CampaignGroupByOutputType, T["by"]> & {
          [P in keyof T & keyof CampaignGroupByOutputType]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CampaignGroupByOutputType[P]>
            : GetScalarType<T[P], CampaignGroupByOutputType[P]>;
        }
      >
    >;

  export type CampaignSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      status?: boolean;
      buying_type?: boolean;
      objective?: boolean;
      special_ad_categories?: boolean;
      start_time?: boolean;
      end_time?: boolean;
      daily_budget?: boolean;
      target?: boolean;
      campaign_type?: boolean;
      creation_date?: boolean;
      campaign_id?: boolean;
      adSets?: boolean | Campaign$adSetsArgs<ExtArgs>;
      _count?: boolean | CampaignCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["campaign"]
  >;

  export type CampaignSelectScalar = {
    id?: boolean;
    name?: boolean;
    status?: boolean;
    buying_type?: boolean;
    objective?: boolean;
    special_ad_categories?: boolean;
    start_time?: boolean;
    end_time?: boolean;
    daily_budget?: boolean;
    target?: boolean;
    campaign_type?: boolean;
    creation_date?: boolean;
    campaign_id?: boolean;
  };

  export type CampaignInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    adSets?: boolean | Campaign$adSetsArgs<ExtArgs>;
    _count?: boolean | CampaignCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $CampaignPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "Campaign";
    objects: {
      adSets: Prisma.$AdSetPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: number;
        name: string;
        status: string;
        buying_type: string;
        objective: string;
        special_ad_categories: string;
        start_time: Date;
        end_time: Date;
        daily_budget: number;
        target: Prisma.JsonValue;
        campaign_type: string;
        creation_date: Date;
        campaign_id: string;
      },
      ExtArgs["result"]["campaign"]
    >;
    composites: {};
  };

  type CampaignGetPayload<
    S extends boolean | null | undefined | CampaignDefaultArgs,
  > = $Result.GetResult<Prisma.$CampaignPayload, S>;

  type CampaignCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<CampaignFindManyArgs, "select" | "include" | "distinct"> & {
    select?: CampaignCountAggregateInputType | true;
  };

  export interface CampaignDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["Campaign"];
      meta: { name: "Campaign" };
    };
    /**
     * Find zero or one Campaign that matches the filter.
     * @param {CampaignFindUniqueArgs} args - Arguments to find a Campaign
     * @example
     * // Get one Campaign
     * const campaign = await prisma.campaign.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends CampaignFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CampaignFindUniqueArgs<ExtArgs>>,
    ): Prisma__CampaignClient<
      $Result.GetResult<
        Prisma.$CampaignPayload<ExtArgs>,
        T,
        "findUnique"
      > | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Campaign that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {CampaignFindUniqueOrThrowArgs} args - Arguments to find a Campaign
     * @example
     * // Get one Campaign
     * const campaign = await prisma.campaign.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends CampaignFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CampaignFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__CampaignClient<
      $Result.GetResult<
        Prisma.$CampaignPayload<ExtArgs>,
        T,
        "findUniqueOrThrow"
      >,
      never,
      ExtArgs
    >;

    /**
     * Find the first Campaign that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignFindFirstArgs} args - Arguments to find a Campaign
     * @example
     * // Get one Campaign
     * const campaign = await prisma.campaign.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends CampaignFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CampaignFindFirstArgs<ExtArgs>>,
    ): Prisma__CampaignClient<
      $Result.GetResult<
        Prisma.$CampaignPayload<ExtArgs>,
        T,
        "findFirst"
      > | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Campaign that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignFindFirstOrThrowArgs} args - Arguments to find a Campaign
     * @example
     * // Get one Campaign
     * const campaign = await prisma.campaign.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends CampaignFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CampaignFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__CampaignClient<
      $Result.GetResult<
        Prisma.$CampaignPayload<ExtArgs>,
        T,
        "findFirstOrThrow"
      >,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Campaigns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Campaigns
     * const campaigns = await prisma.campaign.findMany()
     *
     * // Get first 10 Campaigns
     * const campaigns = await prisma.campaign.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const campaignWithIdOnly = await prisma.campaign.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends CampaignFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CampaignFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findMany">
    >;

    /**
     * Create a Campaign.
     * @param {CampaignCreateArgs} args - Arguments to create a Campaign.
     * @example
     * // Create one Campaign
     * const Campaign = await prisma.campaign.create({
     *   data: {
     *     // ... data to create a Campaign
     *   }
     * })
     *
     **/
    create<T extends CampaignCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CampaignCreateArgs<ExtArgs>>,
    ): Prisma__CampaignClient<
      $Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "create">,
      never,
      ExtArgs
    >;

    /**
     * Create many Campaigns.
     *     @param {CampaignCreateManyArgs} args - Arguments to create many Campaigns.
     *     @example
     *     // Create many Campaigns
     *     const campaign = await prisma.campaign.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends CampaignCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CampaignCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Campaign.
     * @param {CampaignDeleteArgs} args - Arguments to delete one Campaign.
     * @example
     * // Delete one Campaign
     * const Campaign = await prisma.campaign.delete({
     *   where: {
     *     // ... filter to delete one Campaign
     *   }
     * })
     *
     **/
    delete<T extends CampaignDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CampaignDeleteArgs<ExtArgs>>,
    ): Prisma__CampaignClient<
      $Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "delete">,
      never,
      ExtArgs
    >;

    /**
     * Update one Campaign.
     * @param {CampaignUpdateArgs} args - Arguments to update one Campaign.
     * @example
     * // Update one Campaign
     * const campaign = await prisma.campaign.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends CampaignUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CampaignUpdateArgs<ExtArgs>>,
    ): Prisma__CampaignClient<
      $Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "update">,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more Campaigns.
     * @param {CampaignDeleteManyArgs} args - Arguments to filter Campaigns to delete.
     * @example
     * // Delete a few Campaigns
     * const { count } = await prisma.campaign.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends CampaignDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CampaignDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Campaigns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Campaigns
     * const campaign = await prisma.campaign.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends CampaignUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CampaignUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Campaign.
     * @param {CampaignUpsertArgs} args - Arguments to update or create a Campaign.
     * @example
     * // Update or create a Campaign
     * const campaign = await prisma.campaign.upsert({
     *   create: {
     *     // ... data to create a Campaign
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Campaign we want to update
     *   }
     * })
     **/
    upsert<T extends CampaignUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CampaignUpsertArgs<ExtArgs>>,
    ): Prisma__CampaignClient<
      $Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "upsert">,
      never,
      ExtArgs
    >;

    /**
     * Count the number of Campaigns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignCountArgs} args - Arguments to filter Campaigns to count.
     * @example
     * // Count the number of Campaigns
     * const count = await prisma.campaign.count({
     *   where: {
     *     // ... the filter for the Campaigns we want to count
     *   }
     * })
     **/
    count<T extends CampaignCountArgs>(
      args?: Subset<T, CampaignCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], CampaignCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Campaign.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends CampaignAggregateArgs>(
      args: Subset<T, CampaignAggregateArgs>,
    ): Prisma.PrismaPromise<GetCampaignAggregateType<T>>;

    /**
     * Group by Campaign.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends CampaignGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CampaignGroupByArgs["orderBy"] }
        : { orderBy?: CampaignGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, CampaignGroupByArgs, OrderByArg> &
        InputErrors,
    ): {} extends InputErrors
      ? GetCampaignGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Campaign model
     */
    readonly fields: CampaignFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Campaign.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CampaignClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";

    adSets<T extends Campaign$adSetsArgs<ExtArgs> = {}>(
      args?: Subset<T, Campaign$adSetsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$AdSetPayload<ExtArgs>, T, "findMany"> | Null
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Campaign model
   */
  interface CampaignFieldRefs {
    readonly id: FieldRef<"Campaign", "Int">;
    readonly name: FieldRef<"Campaign", "String">;
    readonly status: FieldRef<"Campaign", "String">;
    readonly buying_type: FieldRef<"Campaign", "String">;
    readonly objective: FieldRef<"Campaign", "String">;
    readonly special_ad_categories: FieldRef<"Campaign", "String">;
    readonly start_time: FieldRef<"Campaign", "DateTime">;
    readonly end_time: FieldRef<"Campaign", "DateTime">;
    readonly daily_budget: FieldRef<"Campaign", "Float">;
    readonly target: FieldRef<"Campaign", "Json">;
    readonly campaign_type: FieldRef<"Campaign", "String">;
    readonly creation_date: FieldRef<"Campaign", "DateTime">;
    readonly campaign_id: FieldRef<"Campaign", "String">;
  }

  // Custom InputTypes

  /**
   * Campaign findUnique
   */
  export type CampaignFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CampaignInclude<ExtArgs> | null;
    /**
     * Filter, which Campaign to fetch.
     */
    where: CampaignWhereUniqueInput;
  };

  /**
   * Campaign findUniqueOrThrow
   */
  export type CampaignFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CampaignInclude<ExtArgs> | null;
    /**
     * Filter, which Campaign to fetch.
     */
    where: CampaignWhereUniqueInput;
  };

  /**
   * Campaign findFirst
   */
  export type CampaignFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CampaignInclude<ExtArgs> | null;
    /**
     * Filter, which Campaign to fetch.
     */
    where?: CampaignWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Campaigns to fetch.
     */
    orderBy?:
      | CampaignOrderByWithRelationInput
      | CampaignOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Campaigns.
     */
    cursor?: CampaignWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Campaigns from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Campaigns.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Campaigns.
     */
    distinct?: CampaignScalarFieldEnum | CampaignScalarFieldEnum[];
  };

  /**
   * Campaign findFirstOrThrow
   */
  export type CampaignFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CampaignInclude<ExtArgs> | null;
    /**
     * Filter, which Campaign to fetch.
     */
    where?: CampaignWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Campaigns to fetch.
     */
    orderBy?:
      | CampaignOrderByWithRelationInput
      | CampaignOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Campaigns.
     */
    cursor?: CampaignWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Campaigns from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Campaigns.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Campaigns.
     */
    distinct?: CampaignScalarFieldEnum | CampaignScalarFieldEnum[];
  };

  /**
   * Campaign findMany
   */
  export type CampaignFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CampaignInclude<ExtArgs> | null;
    /**
     * Filter, which Campaigns to fetch.
     */
    where?: CampaignWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Campaigns to fetch.
     */
    orderBy?:
      | CampaignOrderByWithRelationInput
      | CampaignOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Campaigns.
     */
    cursor?: CampaignWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Campaigns from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Campaigns.
     */
    skip?: number;
    distinct?: CampaignScalarFieldEnum | CampaignScalarFieldEnum[];
  };

  /**
   * Campaign create
   */
  export type CampaignCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CampaignInclude<ExtArgs> | null;
    /**
     * The data needed to create a Campaign.
     */
    data: XOR<CampaignCreateInput, CampaignUncheckedCreateInput>;
  };

  /**
   * Campaign createMany
   */
  export type CampaignCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Campaigns.
     */
    data: CampaignCreateManyInput | CampaignCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Campaign update
   */
  export type CampaignUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CampaignInclude<ExtArgs> | null;
    /**
     * The data needed to update a Campaign.
     */
    data: XOR<CampaignUpdateInput, CampaignUncheckedUpdateInput>;
    /**
     * Choose, which Campaign to update.
     */
    where: CampaignWhereUniqueInput;
  };

  /**
   * Campaign updateMany
   */
  export type CampaignUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Campaigns.
     */
    data: XOR<
      CampaignUpdateManyMutationInput,
      CampaignUncheckedUpdateManyInput
    >;
    /**
     * Filter which Campaigns to update
     */
    where?: CampaignWhereInput;
  };

  /**
   * Campaign upsert
   */
  export type CampaignUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CampaignInclude<ExtArgs> | null;
    /**
     * The filter to search for the Campaign to update in case it exists.
     */
    where: CampaignWhereUniqueInput;
    /**
     * In case the Campaign found by the `where` argument doesn't exist, create a new Campaign with this data.
     */
    create: XOR<CampaignCreateInput, CampaignUncheckedCreateInput>;
    /**
     * In case the Campaign was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CampaignUpdateInput, CampaignUncheckedUpdateInput>;
  };

  /**
   * Campaign delete
   */
  export type CampaignDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CampaignInclude<ExtArgs> | null;
    /**
     * Filter which Campaign to delete.
     */
    where: CampaignWhereUniqueInput;
  };

  /**
   * Campaign deleteMany
   */
  export type CampaignDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Campaigns to delete
     */
    where?: CampaignWhereInput;
  };

  /**
   * Campaign.adSets
   */
  export type Campaign$adSetsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AdSet
     */
    select?: AdSetSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AdSetInclude<ExtArgs> | null;
    where?: AdSetWhereInput;
    orderBy?: AdSetOrderByWithRelationInput | AdSetOrderByWithRelationInput[];
    cursor?: AdSetWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: AdSetScalarFieldEnum | AdSetScalarFieldEnum[];
  };

  /**
   * Campaign without action
   */
  export type CampaignDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CampaignInclude<ExtArgs> | null;
  };

  /**
   * Model AdSet
   */

  export type AggregateAdSet = {
    _count: AdSetCountAggregateOutputType | null;
    _avg: AdSetAvgAggregateOutputType | null;
    _sum: AdSetSumAggregateOutputType | null;
    _min: AdSetMinAggregateOutputType | null;
    _max: AdSetMaxAggregateOutputType | null;
  };

  export type AdSetAvgAggregateOutputType = {
    id: number | null;
    bid_amount: number | null;
    campaignId: number | null;
  };

  export type AdSetSumAggregateOutputType = {
    id: number | null;
    bid_amount: number | null;
    campaignId: number | null;
  };

  export type AdSetMinAggregateOutputType = {
    id: number | null;
    name: string | null;
    status: string | null;
    billing_event: string | null;
    bid_amount: number | null;
    adset_id: string | null;
    campaign_id: string | null;
    campaignId: number | null;
  };

  export type AdSetMaxAggregateOutputType = {
    id: number | null;
    name: string | null;
    status: string | null;
    billing_event: string | null;
    bid_amount: number | null;
    adset_id: string | null;
    campaign_id: string | null;
    campaignId: number | null;
  };

  export type AdSetCountAggregateOutputType = {
    id: number;
    name: number;
    status: number;
    targeting: number;
    billing_event: number;
    bid_amount: number;
    adset_id: number;
    campaign_id: number;
    campaignId: number;
    _all: number;
  };

  export type AdSetAvgAggregateInputType = {
    id?: true;
    bid_amount?: true;
    campaignId?: true;
  };

  export type AdSetSumAggregateInputType = {
    id?: true;
    bid_amount?: true;
    campaignId?: true;
  };

  export type AdSetMinAggregateInputType = {
    id?: true;
    name?: true;
    status?: true;
    billing_event?: true;
    bid_amount?: true;
    adset_id?: true;
    campaign_id?: true;
    campaignId?: true;
  };

  export type AdSetMaxAggregateInputType = {
    id?: true;
    name?: true;
    status?: true;
    billing_event?: true;
    bid_amount?: true;
    adset_id?: true;
    campaign_id?: true;
    campaignId?: true;
  };

  export type AdSetCountAggregateInputType = {
    id?: true;
    name?: true;
    status?: true;
    targeting?: true;
    billing_event?: true;
    bid_amount?: true;
    adset_id?: true;
    campaign_id?: true;
    campaignId?: true;
    _all?: true;
  };

  export type AdSetAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which AdSet to aggregate.
     */
    where?: AdSetWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AdSets to fetch.
     */
    orderBy?: AdSetOrderByWithRelationInput | AdSetOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: AdSetWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AdSets from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AdSets.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned AdSets
     **/
    _count?: true | AdSetCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: AdSetAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: AdSetSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: AdSetMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: AdSetMaxAggregateInputType;
  };

  export type GetAdSetAggregateType<T extends AdSetAggregateArgs> = {
    [P in keyof T & keyof AggregateAdSet]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdSet[P]>
      : GetScalarType<T[P], AggregateAdSet[P]>;
  };

  export type AdSetGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: AdSetWhereInput;
    orderBy?:
      | AdSetOrderByWithAggregationInput
      | AdSetOrderByWithAggregationInput[];
    by: AdSetScalarFieldEnum[] | AdSetScalarFieldEnum;
    having?: AdSetScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AdSetCountAggregateInputType | true;
    _avg?: AdSetAvgAggregateInputType;
    _sum?: AdSetSumAggregateInputType;
    _min?: AdSetMinAggregateInputType;
    _max?: AdSetMaxAggregateInputType;
  };

  export type AdSetGroupByOutputType = {
    id: number;
    name: string;
    status: string;
    targeting: JsonValue;
    billing_event: string;
    bid_amount: number;
    adset_id: string;
    campaign_id: string;
    campaignId: number;
    _count: AdSetCountAggregateOutputType | null;
    _avg: AdSetAvgAggregateOutputType | null;
    _sum: AdSetSumAggregateOutputType | null;
    _min: AdSetMinAggregateOutputType | null;
    _max: AdSetMaxAggregateOutputType | null;
  };

  type GetAdSetGroupByPayload<T extends AdSetGroupByArgs> =
    Prisma.PrismaPromise<
      Array<
        PickEnumerable<AdSetGroupByOutputType, T["by"]> & {
          [P in keyof T & keyof AdSetGroupByOutputType]: P extends "_count"
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdSetGroupByOutputType[P]>
            : GetScalarType<T[P], AdSetGroupByOutputType[P]>;
        }
      >
    >;

  export type AdSetSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      status?: boolean;
      targeting?: boolean;
      billing_event?: boolean;
      bid_amount?: boolean;
      adset_id?: boolean;
      campaign_id?: boolean;
      campaignId?: boolean;
      campaign?: boolean | CampaignDefaultArgs<ExtArgs>;
      ads?: boolean | AdSet$adsArgs<ExtArgs>;
      _count?: boolean | AdSetCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["adSet"]
  >;

  export type AdSetSelectScalar = {
    id?: boolean;
    name?: boolean;
    status?: boolean;
    targeting?: boolean;
    billing_event?: boolean;
    bid_amount?: boolean;
    adset_id?: boolean;
    campaign_id?: boolean;
    campaignId?: boolean;
  };

  export type AdSetInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>;
    ads?: boolean | AdSet$adsArgs<ExtArgs>;
    _count?: boolean | AdSetCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $AdSetPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "AdSet";
    objects: {
      campaign: Prisma.$CampaignPayload<ExtArgs>;
      ads: Prisma.$AdPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: number;
        name: string;
        status: string;
        targeting: Prisma.JsonValue;
        billing_event: string;
        bid_amount: number;
        adset_id: string;
        campaign_id: string;
        campaignId: number;
      },
      ExtArgs["result"]["adSet"]
    >;
    composites: {};
  };

  type AdSetGetPayload<
    S extends boolean | null | undefined | AdSetDefaultArgs,
  > = $Result.GetResult<Prisma.$AdSetPayload, S>;

  type AdSetCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<AdSetFindManyArgs, "select" | "include" | "distinct"> & {
    select?: AdSetCountAggregateInputType | true;
  };

  export interface AdSetDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["AdSet"];
      meta: { name: "AdSet" };
    };
    /**
     * Find zero or one AdSet that matches the filter.
     * @param {AdSetFindUniqueArgs} args - Arguments to find a AdSet
     * @example
     * // Get one AdSet
     * const adSet = await prisma.adSet.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends AdSetFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, AdSetFindUniqueArgs<ExtArgs>>,
    ): Prisma__AdSetClient<
      $Result.GetResult<Prisma.$AdSetPayload<ExtArgs>, T, "findUnique"> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one AdSet that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {AdSetFindUniqueOrThrowArgs} args - Arguments to find a AdSet
     * @example
     * // Get one AdSet
     * const adSet = await prisma.adSet.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends AdSetFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AdSetFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__AdSetClient<
      $Result.GetResult<Prisma.$AdSetPayload<ExtArgs>, T, "findUniqueOrThrow">,
      never,
      ExtArgs
    >;

    /**
     * Find the first AdSet that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdSetFindFirstArgs} args - Arguments to find a AdSet
     * @example
     * // Get one AdSet
     * const adSet = await prisma.adSet.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends AdSetFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, AdSetFindFirstArgs<ExtArgs>>,
    ): Prisma__AdSetClient<
      $Result.GetResult<Prisma.$AdSetPayload<ExtArgs>, T, "findFirst"> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first AdSet that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdSetFindFirstOrThrowArgs} args - Arguments to find a AdSet
     * @example
     * // Get one AdSet
     * const adSet = await prisma.adSet.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends AdSetFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AdSetFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__AdSetClient<
      $Result.GetResult<Prisma.$AdSetPayload<ExtArgs>, T, "findFirstOrThrow">,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more AdSets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdSetFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AdSets
     * const adSets = await prisma.adSet.findMany()
     *
     * // Get first 10 AdSets
     * const adSets = await prisma.adSet.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const adSetWithIdOnly = await prisma.adSet.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends AdSetFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AdSetFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$AdSetPayload<ExtArgs>, T, "findMany">
    >;

    /**
     * Create a AdSet.
     * @param {AdSetCreateArgs} args - Arguments to create a AdSet.
     * @example
     * // Create one AdSet
     * const AdSet = await prisma.adSet.create({
     *   data: {
     *     // ... data to create a AdSet
     *   }
     * })
     *
     **/
    create<T extends AdSetCreateArgs<ExtArgs>>(
      args: SelectSubset<T, AdSetCreateArgs<ExtArgs>>,
    ): Prisma__AdSetClient<
      $Result.GetResult<Prisma.$AdSetPayload<ExtArgs>, T, "create">,
      never,
      ExtArgs
    >;

    /**
     * Create many AdSets.
     *     @param {AdSetCreateManyArgs} args - Arguments to create many AdSets.
     *     @example
     *     // Create many AdSets
     *     const adSet = await prisma.adSet.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends AdSetCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AdSetCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a AdSet.
     * @param {AdSetDeleteArgs} args - Arguments to delete one AdSet.
     * @example
     * // Delete one AdSet
     * const AdSet = await prisma.adSet.delete({
     *   where: {
     *     // ... filter to delete one AdSet
     *   }
     * })
     *
     **/
    delete<T extends AdSetDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, AdSetDeleteArgs<ExtArgs>>,
    ): Prisma__AdSetClient<
      $Result.GetResult<Prisma.$AdSetPayload<ExtArgs>, T, "delete">,
      never,
      ExtArgs
    >;

    /**
     * Update one AdSet.
     * @param {AdSetUpdateArgs} args - Arguments to update one AdSet.
     * @example
     * // Update one AdSet
     * const adSet = await prisma.adSet.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends AdSetUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, AdSetUpdateArgs<ExtArgs>>,
    ): Prisma__AdSetClient<
      $Result.GetResult<Prisma.$AdSetPayload<ExtArgs>, T, "update">,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more AdSets.
     * @param {AdSetDeleteManyArgs} args - Arguments to filter AdSets to delete.
     * @example
     * // Delete a few AdSets
     * const { count } = await prisma.adSet.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends AdSetDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AdSetDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more AdSets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdSetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AdSets
     * const adSet = await prisma.adSet.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends AdSetUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, AdSetUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one AdSet.
     * @param {AdSetUpsertArgs} args - Arguments to update or create a AdSet.
     * @example
     * // Update or create a AdSet
     * const adSet = await prisma.adSet.upsert({
     *   create: {
     *     // ... data to create a AdSet
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AdSet we want to update
     *   }
     * })
     **/
    upsert<T extends AdSetUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, AdSetUpsertArgs<ExtArgs>>,
    ): Prisma__AdSetClient<
      $Result.GetResult<Prisma.$AdSetPayload<ExtArgs>, T, "upsert">,
      never,
      ExtArgs
    >;

    /**
     * Count the number of AdSets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdSetCountArgs} args - Arguments to filter AdSets to count.
     * @example
     * // Count the number of AdSets
     * const count = await prisma.adSet.count({
     *   where: {
     *     // ... the filter for the AdSets we want to count
     *   }
     * })
     **/
    count<T extends AdSetCountArgs>(
      args?: Subset<T, AdSetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], AdSetCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a AdSet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdSetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends AdSetAggregateArgs>(
      args: Subset<T, AdSetAggregateArgs>,
    ): Prisma.PrismaPromise<GetAdSetAggregateType<T>>;

    /**
     * Group by AdSet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdSetGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends AdSetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdSetGroupByArgs["orderBy"] }
        : { orderBy?: AdSetGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, AdSetGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetAdSetGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the AdSet model
     */
    readonly fields: AdSetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AdSet.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdSetClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";

    campaign<T extends CampaignDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, CampaignDefaultArgs<ExtArgs>>,
    ): Prisma__CampaignClient<
      | $Result.GetResult<
          Prisma.$CampaignPayload<ExtArgs>,
          T,
          "findUniqueOrThrow"
        >
      | Null,
      Null,
      ExtArgs
    >;

    ads<T extends AdSet$adsArgs<ExtArgs> = {}>(
      args?: Subset<T, AdSet$adsArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$AdPayload<ExtArgs>, T, "findMany"> | Null
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the AdSet model
   */
  interface AdSetFieldRefs {
    readonly id: FieldRef<"AdSet", "Int">;
    readonly name: FieldRef<"AdSet", "String">;
    readonly status: FieldRef<"AdSet", "String">;
    readonly targeting: FieldRef<"AdSet", "Json">;
    readonly billing_event: FieldRef<"AdSet", "String">;
    readonly bid_amount: FieldRef<"AdSet", "Float">;
    readonly adset_id: FieldRef<"AdSet", "String">;
    readonly campaign_id: FieldRef<"AdSet", "String">;
    readonly campaignId: FieldRef<"AdSet", "Int">;
  }

  // Custom InputTypes

  /**
   * AdSet findUnique
   */
  export type AdSetFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AdSet
     */
    select?: AdSetSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AdSetInclude<ExtArgs> | null;
    /**
     * Filter, which AdSet to fetch.
     */
    where: AdSetWhereUniqueInput;
  };

  /**
   * AdSet findUniqueOrThrow
   */
  export type AdSetFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AdSet
     */
    select?: AdSetSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AdSetInclude<ExtArgs> | null;
    /**
     * Filter, which AdSet to fetch.
     */
    where: AdSetWhereUniqueInput;
  };

  /**
   * AdSet findFirst
   */
  export type AdSetFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AdSet
     */
    select?: AdSetSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AdSetInclude<ExtArgs> | null;
    /**
     * Filter, which AdSet to fetch.
     */
    where?: AdSetWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AdSets to fetch.
     */
    orderBy?: AdSetOrderByWithRelationInput | AdSetOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for AdSets.
     */
    cursor?: AdSetWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AdSets from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AdSets.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of AdSets.
     */
    distinct?: AdSetScalarFieldEnum | AdSetScalarFieldEnum[];
  };

  /**
   * AdSet findFirstOrThrow
   */
  export type AdSetFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AdSet
     */
    select?: AdSetSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AdSetInclude<ExtArgs> | null;
    /**
     * Filter, which AdSet to fetch.
     */
    where?: AdSetWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AdSets to fetch.
     */
    orderBy?: AdSetOrderByWithRelationInput | AdSetOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for AdSets.
     */
    cursor?: AdSetWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AdSets from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AdSets.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of AdSets.
     */
    distinct?: AdSetScalarFieldEnum | AdSetScalarFieldEnum[];
  };

  /**
   * AdSet findMany
   */
  export type AdSetFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AdSet
     */
    select?: AdSetSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AdSetInclude<ExtArgs> | null;
    /**
     * Filter, which AdSets to fetch.
     */
    where?: AdSetWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of AdSets to fetch.
     */
    orderBy?: AdSetOrderByWithRelationInput | AdSetOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing AdSets.
     */
    cursor?: AdSetWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` AdSets from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` AdSets.
     */
    skip?: number;
    distinct?: AdSetScalarFieldEnum | AdSetScalarFieldEnum[];
  };

  /**
   * AdSet create
   */
  export type AdSetCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AdSet
     */
    select?: AdSetSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AdSetInclude<ExtArgs> | null;
    /**
     * The data needed to create a AdSet.
     */
    data: XOR<AdSetCreateInput, AdSetUncheckedCreateInput>;
  };

  /**
   * AdSet createMany
   */
  export type AdSetCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many AdSets.
     */
    data: AdSetCreateManyInput | AdSetCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * AdSet update
   */
  export type AdSetUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AdSet
     */
    select?: AdSetSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AdSetInclude<ExtArgs> | null;
    /**
     * The data needed to update a AdSet.
     */
    data: XOR<AdSetUpdateInput, AdSetUncheckedUpdateInput>;
    /**
     * Choose, which AdSet to update.
     */
    where: AdSetWhereUniqueInput;
  };

  /**
   * AdSet updateMany
   */
  export type AdSetUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update AdSets.
     */
    data: XOR<AdSetUpdateManyMutationInput, AdSetUncheckedUpdateManyInput>;
    /**
     * Filter which AdSets to update
     */
    where?: AdSetWhereInput;
  };

  /**
   * AdSet upsert
   */
  export type AdSetUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AdSet
     */
    select?: AdSetSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AdSetInclude<ExtArgs> | null;
    /**
     * The filter to search for the AdSet to update in case it exists.
     */
    where: AdSetWhereUniqueInput;
    /**
     * In case the AdSet found by the `where` argument doesn't exist, create a new AdSet with this data.
     */
    create: XOR<AdSetCreateInput, AdSetUncheckedCreateInput>;
    /**
     * In case the AdSet was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdSetUpdateInput, AdSetUncheckedUpdateInput>;
  };

  /**
   * AdSet delete
   */
  export type AdSetDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AdSet
     */
    select?: AdSetSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AdSetInclude<ExtArgs> | null;
    /**
     * Filter which AdSet to delete.
     */
    where: AdSetWhereUniqueInput;
  };

  /**
   * AdSet deleteMany
   */
  export type AdSetDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which AdSets to delete
     */
    where?: AdSetWhereInput;
  };

  /**
   * AdSet.ads
   */
  export type AdSet$adsArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Ad
     */
    select?: AdSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AdInclude<ExtArgs> | null;
    where?: AdWhereInput;
    orderBy?: AdOrderByWithRelationInput | AdOrderByWithRelationInput[];
    cursor?: AdWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: AdScalarFieldEnum | AdScalarFieldEnum[];
  };

  /**
   * AdSet without action
   */
  export type AdSetDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AdSet
     */
    select?: AdSetSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AdSetInclude<ExtArgs> | null;
  };

  /**
   * Model Ad
   */

  export type AggregateAd = {
    _count: AdCountAggregateOutputType | null;
    _avg: AdAvgAggregateOutputType | null;
    _sum: AdSumAggregateOutputType | null;
    _min: AdMinAggregateOutputType | null;
    _max: AdMaxAggregateOutputType | null;
  };

  export type AdAvgAggregateOutputType = {
    id: number | null;
    adSetId: number | null;
  };

  export type AdSumAggregateOutputType = {
    id: number | null;
    adSetId: number | null;
  };

  export type AdMinAggregateOutputType = {
    id: number | null;
    name: string | null;
    status: string | null;
    adset_id: string | null;
    ad_id: string | null;
    adSetId: number | null;
  };

  export type AdMaxAggregateOutputType = {
    id: number | null;
    name: string | null;
    status: string | null;
    adset_id: string | null;
    ad_id: string | null;
    adSetId: number | null;
  };

  export type AdCountAggregateOutputType = {
    id: number;
    name: number;
    status: number;
    adset_id: number;
    ad_id: number;
    adSetId: number;
    creative: number;
    _all: number;
  };

  export type AdAvgAggregateInputType = {
    id?: true;
    adSetId?: true;
  };

  export type AdSumAggregateInputType = {
    id?: true;
    adSetId?: true;
  };

  export type AdMinAggregateInputType = {
    id?: true;
    name?: true;
    status?: true;
    adset_id?: true;
    ad_id?: true;
    adSetId?: true;
  };

  export type AdMaxAggregateInputType = {
    id?: true;
    name?: true;
    status?: true;
    adset_id?: true;
    ad_id?: true;
    adSetId?: true;
  };

  export type AdCountAggregateInputType = {
    id?: true;
    name?: true;
    status?: true;
    adset_id?: true;
    ad_id?: true;
    adSetId?: true;
    creative?: true;
    _all?: true;
  };

  export type AdAggregateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Ad to aggregate.
     */
    where?: AdWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Ads to fetch.
     */
    orderBy?: AdOrderByWithRelationInput | AdOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: AdWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Ads from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Ads.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Ads
     **/
    _count?: true | AdCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: AdAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: AdSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: AdMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: AdMaxAggregateInputType;
  };

  export type GetAdAggregateType<T extends AdAggregateArgs> = {
    [P in keyof T & keyof AggregateAd]: P extends "_count" | "count"
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAd[P]>
      : GetScalarType<T[P], AggregateAd[P]>;
  };

  export type AdGroupByArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: AdWhereInput;
    orderBy?: AdOrderByWithAggregationInput | AdOrderByWithAggregationInput[];
    by: AdScalarFieldEnum[] | AdScalarFieldEnum;
    having?: AdScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AdCountAggregateInputType | true;
    _avg?: AdAvgAggregateInputType;
    _sum?: AdSumAggregateInputType;
    _min?: AdMinAggregateInputType;
    _max?: AdMaxAggregateInputType;
  };

  export type AdGroupByOutputType = {
    id: number;
    name: string;
    status: string;
    adset_id: string;
    ad_id: string;
    adSetId: number;
    creative: JsonValue;
    _count: AdCountAggregateOutputType | null;
    _avg: AdAvgAggregateOutputType | null;
    _sum: AdSumAggregateOutputType | null;
    _min: AdMinAggregateOutputType | null;
    _max: AdMaxAggregateOutputType | null;
  };

  type GetAdGroupByPayload<T extends AdGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdGroupByOutputType, T["by"]> & {
        [P in keyof T & keyof AdGroupByOutputType]: P extends "_count"
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], AdGroupByOutputType[P]>
          : GetScalarType<T[P], AdGroupByOutputType[P]>;
      }
    >
  >;

  export type AdSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = $Extensions.GetSelect<
    {
      id?: boolean;
      name?: boolean;
      status?: boolean;
      adset_id?: boolean;
      ad_id?: boolean;
      adSetId?: boolean;
      creative?: boolean;
      adSet?: boolean | AdSetDefaultArgs<ExtArgs>;
    },
    ExtArgs["result"]["ad"]
  >;

  export type AdSelectScalar = {
    id?: boolean;
    name?: boolean;
    status?: boolean;
    adset_id?: boolean;
    ad_id?: boolean;
    adSetId?: boolean;
    creative?: boolean;
  };

  export type AdInclude<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    adSet?: boolean | AdSetDefaultArgs<ExtArgs>;
  };

  export type $AdPayload<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    name: "Ad";
    objects: {
      adSet: Prisma.$AdSetPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: number;
        name: string;
        status: string;
        adset_id: string;
        ad_id: string;
        adSetId: number;
        creative: Prisma.JsonValue;
      },
      ExtArgs["result"]["ad"]
    >;
    composites: {};
  };

  type AdGetPayload<S extends boolean | null | undefined | AdDefaultArgs> =
    $Result.GetResult<Prisma.$AdPayload, S>;

  type AdCountArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Omit<AdFindManyArgs, "select" | "include" | "distinct"> & {
    select?: AdCountAggregateInputType | true;
  };

  export interface AdDelegate<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>["model"]["Ad"];
      meta: { name: "Ad" };
    };
    /**
     * Find zero or one Ad that matches the filter.
     * @param {AdFindUniqueArgs} args - Arguments to find a Ad
     * @example
     * // Get one Ad
     * const ad = await prisma.ad.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends AdFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, AdFindUniqueArgs<ExtArgs>>,
    ): Prisma__AdClient<
      $Result.GetResult<Prisma.$AdPayload<ExtArgs>, T, "findUnique"> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Ad that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {AdFindUniqueOrThrowArgs} args - Arguments to find a Ad
     * @example
     * // Get one Ad
     * const ad = await prisma.ad.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends AdFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AdFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__AdClient<
      $Result.GetResult<Prisma.$AdPayload<ExtArgs>, T, "findUniqueOrThrow">,
      never,
      ExtArgs
    >;

    /**
     * Find the first Ad that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdFindFirstArgs} args - Arguments to find a Ad
     * @example
     * // Get one Ad
     * const ad = await prisma.ad.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends AdFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, AdFindFirstArgs<ExtArgs>>,
    ): Prisma__AdClient<
      $Result.GetResult<Prisma.$AdPayload<ExtArgs>, T, "findFirst"> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Ad that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdFindFirstOrThrowArgs} args - Arguments to find a Ad
     * @example
     * // Get one Ad
     * const ad = await prisma.ad.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends AdFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AdFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__AdClient<
      $Result.GetResult<Prisma.$AdPayload<ExtArgs>, T, "findFirstOrThrow">,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Ads that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ads
     * const ads = await prisma.ad.findMany()
     *
     * // Get first 10 Ads
     * const ads = await prisma.ad.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const adWithIdOnly = await prisma.ad.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends AdFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AdFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<
      $Result.GetResult<Prisma.$AdPayload<ExtArgs>, T, "findMany">
    >;

    /**
     * Create a Ad.
     * @param {AdCreateArgs} args - Arguments to create a Ad.
     * @example
     * // Create one Ad
     * const Ad = await prisma.ad.create({
     *   data: {
     *     // ... data to create a Ad
     *   }
     * })
     *
     **/
    create<T extends AdCreateArgs<ExtArgs>>(
      args: SelectSubset<T, AdCreateArgs<ExtArgs>>,
    ): Prisma__AdClient<
      $Result.GetResult<Prisma.$AdPayload<ExtArgs>, T, "create">,
      never,
      ExtArgs
    >;

    /**
     * Create many Ads.
     *     @param {AdCreateManyArgs} args - Arguments to create many Ads.
     *     @example
     *     // Create many Ads
     *     const ad = await prisma.ad.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends AdCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AdCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Ad.
     * @param {AdDeleteArgs} args - Arguments to delete one Ad.
     * @example
     * // Delete one Ad
     * const Ad = await prisma.ad.delete({
     *   where: {
     *     // ... filter to delete one Ad
     *   }
     * })
     *
     **/
    delete<T extends AdDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, AdDeleteArgs<ExtArgs>>,
    ): Prisma__AdClient<
      $Result.GetResult<Prisma.$AdPayload<ExtArgs>, T, "delete">,
      never,
      ExtArgs
    >;

    /**
     * Update one Ad.
     * @param {AdUpdateArgs} args - Arguments to update one Ad.
     * @example
     * // Update one Ad
     * const ad = await prisma.ad.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends AdUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, AdUpdateArgs<ExtArgs>>,
    ): Prisma__AdClient<
      $Result.GetResult<Prisma.$AdPayload<ExtArgs>, T, "update">,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more Ads.
     * @param {AdDeleteManyArgs} args - Arguments to filter Ads to delete.
     * @example
     * // Delete a few Ads
     * const { count } = await prisma.ad.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends AdDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AdDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Ads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ads
     * const ad = await prisma.ad.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends AdUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, AdUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Ad.
     * @param {AdUpsertArgs} args - Arguments to update or create a Ad.
     * @example
     * // Update or create a Ad
     * const ad = await prisma.ad.upsert({
     *   create: {
     *     // ... data to create a Ad
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ad we want to update
     *   }
     * })
     **/
    upsert<T extends AdUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, AdUpsertArgs<ExtArgs>>,
    ): Prisma__AdClient<
      $Result.GetResult<Prisma.$AdPayload<ExtArgs>, T, "upsert">,
      never,
      ExtArgs
    >;

    /**
     * Count the number of Ads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdCountArgs} args - Arguments to filter Ads to count.
     * @example
     * // Count the number of Ads
     * const count = await prisma.ad.count({
     *   where: {
     *     // ... the filter for the Ads we want to count
     *   }
     * })
     **/
    count<T extends AdCountArgs>(
      args?: Subset<T, AdCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<"select", any>
        ? T["select"] extends true
          ? number
          : GetScalarType<T["select"], AdCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Ad.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends AdAggregateArgs>(
      args: Subset<T, AdAggregateArgs>,
    ): Prisma.PrismaPromise<GetAdAggregateType<T>>;

    /**
     * Group by Ad.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends AdGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<"skip", Keys<T>>,
        Extends<"take", Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdGroupByArgs["orderBy"] }
        : { orderBy?: AdGroupByArgs["orderBy"] },
      OrderFields extends ExcludeUnderscoreKeys<
        Keys<MaybeTupleToUnion<T["orderBy"]>>
      >,
      ByFields extends MaybeTupleToUnion<T["by"]>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T["having"]>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T["by"] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
          ? {
              [P in HavingFields]: P extends ByFields
                ? never
                : P extends string
                  ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                  : [
                      Error,
                      "Field ",
                      P,
                      ` in "having" needs to be provided in "by"`,
                    ];
            }[HavingFields]
          : "take" extends Keys<T>
            ? "orderBy" extends Keys<T>
              ? ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "take", you also need to provide "orderBy"'
            : "skip" extends Keys<T>
              ? "orderBy" extends Keys<T>
                ? ByValid extends True
                  ? {}
                  : {
                      [P in OrderFields]: P extends ByFields
                        ? never
                        : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                    }[OrderFields]
                : 'Error: If you provide "skip", you also need to provide "orderBy"'
              : ByValid extends True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields],
    >(
      args: SubsetIntersection<T, AdGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors
      ? GetAdGroupByPayload<T>
      : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Ad model
     */
    readonly fields: AdFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ad.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";

    adSet<T extends AdSetDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, AdSetDefaultArgs<ExtArgs>>,
    ): Prisma__AdSetClient<
      | $Result.GetResult<Prisma.$AdSetPayload<ExtArgs>, T, "findUniqueOrThrow">
      | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?:
        | ((value: T) => TResult1 | PromiseLike<TResult1>)
        | undefined
        | null,
      onrejected?:
        | ((reason: any) => TResult2 | PromiseLike<TResult2>)
        | undefined
        | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?:
        | ((reason: any) => TResult | PromiseLike<TResult>)
        | undefined
        | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the Ad model
   */
  interface AdFieldRefs {
    readonly id: FieldRef<"Ad", "Int">;
    readonly name: FieldRef<"Ad", "String">;
    readonly status: FieldRef<"Ad", "String">;
    readonly adset_id: FieldRef<"Ad", "String">;
    readonly ad_id: FieldRef<"Ad", "String">;
    readonly adSetId: FieldRef<"Ad", "Int">;
    readonly creative: FieldRef<"Ad", "Json">;
  }

  // Custom InputTypes

  /**
   * Ad findUnique
   */
  export type AdFindUniqueArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Ad
     */
    select?: AdSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AdInclude<ExtArgs> | null;
    /**
     * Filter, which Ad to fetch.
     */
    where: AdWhereUniqueInput;
  };

  /**
   * Ad findUniqueOrThrow
   */
  export type AdFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Ad
     */
    select?: AdSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AdInclude<ExtArgs> | null;
    /**
     * Filter, which Ad to fetch.
     */
    where: AdWhereUniqueInput;
  };

  /**
   * Ad findFirst
   */
  export type AdFindFirstArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Ad
     */
    select?: AdSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AdInclude<ExtArgs> | null;
    /**
     * Filter, which Ad to fetch.
     */
    where?: AdWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Ads to fetch.
     */
    orderBy?: AdOrderByWithRelationInput | AdOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Ads.
     */
    cursor?: AdWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Ads from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Ads.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Ads.
     */
    distinct?: AdScalarFieldEnum | AdScalarFieldEnum[];
  };

  /**
   * Ad findFirstOrThrow
   */
  export type AdFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Ad
     */
    select?: AdSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AdInclude<ExtArgs> | null;
    /**
     * Filter, which Ad to fetch.
     */
    where?: AdWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Ads to fetch.
     */
    orderBy?: AdOrderByWithRelationInput | AdOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Ads.
     */
    cursor?: AdWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Ads from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Ads.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Ads.
     */
    distinct?: AdScalarFieldEnum | AdScalarFieldEnum[];
  };

  /**
   * Ad findMany
   */
  export type AdFindManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Ad
     */
    select?: AdSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AdInclude<ExtArgs> | null;
    /**
     * Filter, which Ads to fetch.
     */
    where?: AdWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Ads to fetch.
     */
    orderBy?: AdOrderByWithRelationInput | AdOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Ads.
     */
    cursor?: AdWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Ads from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Ads.
     */
    skip?: number;
    distinct?: AdScalarFieldEnum | AdScalarFieldEnum[];
  };

  /**
   * Ad create
   */
  export type AdCreateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Ad
     */
    select?: AdSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AdInclude<ExtArgs> | null;
    /**
     * The data needed to create a Ad.
     */
    data: XOR<AdCreateInput, AdUncheckedCreateInput>;
  };

  /**
   * Ad createMany
   */
  export type AdCreateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to create many Ads.
     */
    data: AdCreateManyInput | AdCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * Ad update
   */
  export type AdUpdateArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Ad
     */
    select?: AdSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AdInclude<ExtArgs> | null;
    /**
     * The data needed to update a Ad.
     */
    data: XOR<AdUpdateInput, AdUncheckedUpdateInput>;
    /**
     * Choose, which Ad to update.
     */
    where: AdWhereUniqueInput;
  };

  /**
   * Ad updateMany
   */
  export type AdUpdateManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * The data used to update Ads.
     */
    data: XOR<AdUpdateManyMutationInput, AdUncheckedUpdateManyInput>;
    /**
     * Filter which Ads to update
     */
    where?: AdWhereInput;
  };

  /**
   * Ad upsert
   */
  export type AdUpsertArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Ad
     */
    select?: AdSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AdInclude<ExtArgs> | null;
    /**
     * The filter to search for the Ad to update in case it exists.
     */
    where: AdWhereUniqueInput;
    /**
     * In case the Ad found by the `where` argument doesn't exist, create a new Ad with this data.
     */
    create: XOR<AdCreateInput, AdUncheckedCreateInput>;
    /**
     * In case the Ad was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdUpdateInput, AdUncheckedUpdateInput>;
  };

  /**
   * Ad delete
   */
  export type AdDeleteArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Ad
     */
    select?: AdSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AdInclude<ExtArgs> | null;
    /**
     * Filter which Ad to delete.
     */
    where: AdWhereUniqueInput;
  };

  /**
   * Ad deleteMany
   */
  export type AdDeleteManyArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Filter which Ads to delete
     */
    where?: AdWhereInput;
  };

  /**
   * Ad without action
   */
  export type AdDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Ad
     */
    select?: AdSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AdInclude<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: "ReadUncommitted";
    ReadCommitted: "ReadCommitted";
    RepeatableRead: "RepeatableRead";
    Serializable: "Serializable";
  };

  export type TransactionIsolationLevel =
    (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const CampaignScalarFieldEnum: {
    id: "id";
    name: "name";
    status: "status";
    buying_type: "buying_type";
    objective: "objective";
    special_ad_categories: "special_ad_categories";
    start_time: "start_time";
    end_time: "end_time";
    daily_budget: "daily_budget";
    target: "target";
    campaign_type: "campaign_type";
    creation_date: "creation_date";
    campaign_id: "campaign_id";
  };

  export type CampaignScalarFieldEnum =
    (typeof CampaignScalarFieldEnum)[keyof typeof CampaignScalarFieldEnum];

  export const AdSetScalarFieldEnum: {
    id: "id";
    name: "name";
    status: "status";
    targeting: "targeting";
    billing_event: "billing_event";
    bid_amount: "bid_amount";
    adset_id: "adset_id";
    campaign_id: "campaign_id";
    campaignId: "campaignId";
  };

  export type AdSetScalarFieldEnum =
    (typeof AdSetScalarFieldEnum)[keyof typeof AdSetScalarFieldEnum];

  export const AdScalarFieldEnum: {
    id: "id";
    name: "name";
    status: "status";
    adset_id: "adset_id";
    ad_id: "ad_id";
    adSetId: "adSetId";
    creative: "creative";
  };

  export type AdScalarFieldEnum =
    (typeof AdScalarFieldEnum)[keyof typeof AdScalarFieldEnum];

  export const SortOrder: {
    asc: "asc";
    desc: "desc";
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull;
  };

  export type JsonNullValueInput =
    (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput];

  export const JsonNullValueFilter: {
    DbNull: typeof DbNull;
    JsonNull: typeof JsonNull;
    AnyNull: typeof AnyNull;
  };

  export type JsonNullValueFilter =
    (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "Int"
  >;

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "String"
  >;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "DateTime"
  >;

  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "Float"
  >;

  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<
    $PrismaModel,
    "Json"
  >;

  /**
   * Deep Input Types
   */

  export type CampaignWhereInput = {
    AND?: CampaignWhereInput | CampaignWhereInput[];
    OR?: CampaignWhereInput[];
    NOT?: CampaignWhereInput | CampaignWhereInput[];
    id?: IntFilter<"Campaign"> | number;
    name?: StringFilter<"Campaign"> | string;
    status?: StringFilter<"Campaign"> | string;
    buying_type?: StringFilter<"Campaign"> | string;
    objective?: StringFilter<"Campaign"> | string;
    special_ad_categories?: StringFilter<"Campaign"> | string;
    start_time?: DateTimeFilter<"Campaign"> | Date | string;
    end_time?: DateTimeFilter<"Campaign"> | Date | string;
    daily_budget?: FloatFilter<"Campaign"> | number;
    target?: JsonFilter<"Campaign">;
    campaign_type?: StringFilter<"Campaign"> | string;
    creation_date?: DateTimeFilter<"Campaign"> | Date | string;
    campaign_id?: StringFilter<"Campaign"> | string;
    adSets?: AdSetListRelationFilter;
  };

  export type CampaignOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    status?: SortOrder;
    buying_type?: SortOrder;
    objective?: SortOrder;
    special_ad_categories?: SortOrder;
    start_time?: SortOrder;
    end_time?: SortOrder;
    daily_budget?: SortOrder;
    target?: SortOrder;
    campaign_type?: SortOrder;
    creation_date?: SortOrder;
    campaign_id?: SortOrder;
    adSets?: AdSetOrderByRelationAggregateInput;
  };

  export type CampaignWhereUniqueInput = Prisma.AtLeast<
    {
      id?: number;
      campaign_id?: string;
      AND?: CampaignWhereInput | CampaignWhereInput[];
      OR?: CampaignWhereInput[];
      NOT?: CampaignWhereInput | CampaignWhereInput[];
      name?: StringFilter<"Campaign"> | string;
      status?: StringFilter<"Campaign"> | string;
      buying_type?: StringFilter<"Campaign"> | string;
      objective?: StringFilter<"Campaign"> | string;
      special_ad_categories?: StringFilter<"Campaign"> | string;
      start_time?: DateTimeFilter<"Campaign"> | Date | string;
      end_time?: DateTimeFilter<"Campaign"> | Date | string;
      daily_budget?: FloatFilter<"Campaign"> | number;
      target?: JsonFilter<"Campaign">;
      campaign_type?: StringFilter<"Campaign"> | string;
      creation_date?: DateTimeFilter<"Campaign"> | Date | string;
      adSets?: AdSetListRelationFilter;
    },
    "id" | "campaign_id"
  >;

  export type CampaignOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    status?: SortOrder;
    buying_type?: SortOrder;
    objective?: SortOrder;
    special_ad_categories?: SortOrder;
    start_time?: SortOrder;
    end_time?: SortOrder;
    daily_budget?: SortOrder;
    target?: SortOrder;
    campaign_type?: SortOrder;
    creation_date?: SortOrder;
    campaign_id?: SortOrder;
    _count?: CampaignCountOrderByAggregateInput;
    _avg?: CampaignAvgOrderByAggregateInput;
    _max?: CampaignMaxOrderByAggregateInput;
    _min?: CampaignMinOrderByAggregateInput;
    _sum?: CampaignSumOrderByAggregateInput;
  };

  export type CampaignScalarWhereWithAggregatesInput = {
    AND?:
      | CampaignScalarWhereWithAggregatesInput
      | CampaignScalarWhereWithAggregatesInput[];
    OR?: CampaignScalarWhereWithAggregatesInput[];
    NOT?:
      | CampaignScalarWhereWithAggregatesInput
      | CampaignScalarWhereWithAggregatesInput[];
    id?: IntWithAggregatesFilter<"Campaign"> | number;
    name?: StringWithAggregatesFilter<"Campaign"> | string;
    status?: StringWithAggregatesFilter<"Campaign"> | string;
    buying_type?: StringWithAggregatesFilter<"Campaign"> | string;
    objective?: StringWithAggregatesFilter<"Campaign"> | string;
    special_ad_categories?: StringWithAggregatesFilter<"Campaign"> | string;
    start_time?: DateTimeWithAggregatesFilter<"Campaign"> | Date | string;
    end_time?: DateTimeWithAggregatesFilter<"Campaign"> | Date | string;
    daily_budget?: FloatWithAggregatesFilter<"Campaign"> | number;
    target?: JsonWithAggregatesFilter<"Campaign">;
    campaign_type?: StringWithAggregatesFilter<"Campaign"> | string;
    creation_date?: DateTimeWithAggregatesFilter<"Campaign"> | Date | string;
    campaign_id?: StringWithAggregatesFilter<"Campaign"> | string;
  };

  export type AdSetWhereInput = {
    AND?: AdSetWhereInput | AdSetWhereInput[];
    OR?: AdSetWhereInput[];
    NOT?: AdSetWhereInput | AdSetWhereInput[];
    id?: IntFilter<"AdSet"> | number;
    name?: StringFilter<"AdSet"> | string;
    status?: StringFilter<"AdSet"> | string;
    targeting?: JsonFilter<"AdSet">;
    billing_event?: StringFilter<"AdSet"> | string;
    bid_amount?: FloatFilter<"AdSet"> | number;
    adset_id?: StringFilter<"AdSet"> | string;
    campaign_id?: StringFilter<"AdSet"> | string;
    campaignId?: IntFilter<"AdSet"> | number;
    campaign?: XOR<CampaignRelationFilter, CampaignWhereInput>;
    ads?: AdListRelationFilter;
  };

  export type AdSetOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    status?: SortOrder;
    targeting?: SortOrder;
    billing_event?: SortOrder;
    bid_amount?: SortOrder;
    adset_id?: SortOrder;
    campaign_id?: SortOrder;
    campaignId?: SortOrder;
    campaign?: CampaignOrderByWithRelationInput;
    ads?: AdOrderByRelationAggregateInput;
  };

  export type AdSetWhereUniqueInput = Prisma.AtLeast<
    {
      id?: number;
      adset_id?: string;
      AND?: AdSetWhereInput | AdSetWhereInput[];
      OR?: AdSetWhereInput[];
      NOT?: AdSetWhereInput | AdSetWhereInput[];
      name?: StringFilter<"AdSet"> | string;
      status?: StringFilter<"AdSet"> | string;
      targeting?: JsonFilter<"AdSet">;
      billing_event?: StringFilter<"AdSet"> | string;
      bid_amount?: FloatFilter<"AdSet"> | number;
      campaign_id?: StringFilter<"AdSet"> | string;
      campaignId?: IntFilter<"AdSet"> | number;
      campaign?: XOR<CampaignRelationFilter, CampaignWhereInput>;
      ads?: AdListRelationFilter;
    },
    "id" | "adset_id"
  >;

  export type AdSetOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    status?: SortOrder;
    targeting?: SortOrder;
    billing_event?: SortOrder;
    bid_amount?: SortOrder;
    adset_id?: SortOrder;
    campaign_id?: SortOrder;
    campaignId?: SortOrder;
    _count?: AdSetCountOrderByAggregateInput;
    _avg?: AdSetAvgOrderByAggregateInput;
    _max?: AdSetMaxOrderByAggregateInput;
    _min?: AdSetMinOrderByAggregateInput;
    _sum?: AdSetSumOrderByAggregateInput;
  };

  export type AdSetScalarWhereWithAggregatesInput = {
    AND?:
      | AdSetScalarWhereWithAggregatesInput
      | AdSetScalarWhereWithAggregatesInput[];
    OR?: AdSetScalarWhereWithAggregatesInput[];
    NOT?:
      | AdSetScalarWhereWithAggregatesInput
      | AdSetScalarWhereWithAggregatesInput[];
    id?: IntWithAggregatesFilter<"AdSet"> | number;
    name?: StringWithAggregatesFilter<"AdSet"> | string;
    status?: StringWithAggregatesFilter<"AdSet"> | string;
    targeting?: JsonWithAggregatesFilter<"AdSet">;
    billing_event?: StringWithAggregatesFilter<"AdSet"> | string;
    bid_amount?: FloatWithAggregatesFilter<"AdSet"> | number;
    adset_id?: StringWithAggregatesFilter<"AdSet"> | string;
    campaign_id?: StringWithAggregatesFilter<"AdSet"> | string;
    campaignId?: IntWithAggregatesFilter<"AdSet"> | number;
  };

  export type AdWhereInput = {
    AND?: AdWhereInput | AdWhereInput[];
    OR?: AdWhereInput[];
    NOT?: AdWhereInput | AdWhereInput[];
    id?: IntFilter<"Ad"> | number;
    name?: StringFilter<"Ad"> | string;
    status?: StringFilter<"Ad"> | string;
    adset_id?: StringFilter<"Ad"> | string;
    ad_id?: StringFilter<"Ad"> | string;
    adSetId?: IntFilter<"Ad"> | number;
    creative?: JsonFilter<"Ad">;
    adSet?: XOR<AdSetRelationFilter, AdSetWhereInput>;
  };

  export type AdOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    status?: SortOrder;
    adset_id?: SortOrder;
    ad_id?: SortOrder;
    adSetId?: SortOrder;
    creative?: SortOrder;
    adSet?: AdSetOrderByWithRelationInput;
  };

  export type AdWhereUniqueInput = Prisma.AtLeast<
    {
      id?: number;
      ad_id?: string;
      AND?: AdWhereInput | AdWhereInput[];
      OR?: AdWhereInput[];
      NOT?: AdWhereInput | AdWhereInput[];
      name?: StringFilter<"Ad"> | string;
      status?: StringFilter<"Ad"> | string;
      adset_id?: StringFilter<"Ad"> | string;
      adSetId?: IntFilter<"Ad"> | number;
      creative?: JsonFilter<"Ad">;
      adSet?: XOR<AdSetRelationFilter, AdSetWhereInput>;
    },
    "id" | "ad_id"
  >;

  export type AdOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    status?: SortOrder;
    adset_id?: SortOrder;
    ad_id?: SortOrder;
    adSetId?: SortOrder;
    creative?: SortOrder;
    _count?: AdCountOrderByAggregateInput;
    _avg?: AdAvgOrderByAggregateInput;
    _max?: AdMaxOrderByAggregateInput;
    _min?: AdMinOrderByAggregateInput;
    _sum?: AdSumOrderByAggregateInput;
  };

  export type AdScalarWhereWithAggregatesInput = {
    AND?: AdScalarWhereWithAggregatesInput | AdScalarWhereWithAggregatesInput[];
    OR?: AdScalarWhereWithAggregatesInput[];
    NOT?: AdScalarWhereWithAggregatesInput | AdScalarWhereWithAggregatesInput[];
    id?: IntWithAggregatesFilter<"Ad"> | number;
    name?: StringWithAggregatesFilter<"Ad"> | string;
    status?: StringWithAggregatesFilter<"Ad"> | string;
    adset_id?: StringWithAggregatesFilter<"Ad"> | string;
    ad_id?: StringWithAggregatesFilter<"Ad"> | string;
    adSetId?: IntWithAggregatesFilter<"Ad"> | number;
    creative?: JsonWithAggregatesFilter<"Ad">;
  };

  export type CampaignCreateInput = {
    name: string;
    status: string;
    buying_type: string;
    objective: string;
    special_ad_categories: string;
    start_time: Date | string;
    end_time: Date | string;
    daily_budget: number;
    target: JsonNullValueInput | InputJsonValue;
    campaign_type: string;
    creation_date?: Date | string;
    campaign_id: string;
    adSets?: AdSetCreateNestedManyWithoutCampaignInput;
  };

  export type CampaignUncheckedCreateInput = {
    id?: number;
    name: string;
    status: string;
    buying_type: string;
    objective: string;
    special_ad_categories: string;
    start_time: Date | string;
    end_time: Date | string;
    daily_budget: number;
    target: JsonNullValueInput | InputJsonValue;
    campaign_type: string;
    creation_date?: Date | string;
    campaign_id: string;
    adSets?: AdSetUncheckedCreateNestedManyWithoutCampaignInput;
  };

  export type CampaignUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    buying_type?: StringFieldUpdateOperationsInput | string;
    objective?: StringFieldUpdateOperationsInput | string;
    special_ad_categories?: StringFieldUpdateOperationsInput | string;
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    daily_budget?: FloatFieldUpdateOperationsInput | number;
    target?: JsonNullValueInput | InputJsonValue;
    campaign_type?: StringFieldUpdateOperationsInput | string;
    creation_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    campaign_id?: StringFieldUpdateOperationsInput | string;
    adSets?: AdSetUpdateManyWithoutCampaignNestedInput;
  };

  export type CampaignUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    buying_type?: StringFieldUpdateOperationsInput | string;
    objective?: StringFieldUpdateOperationsInput | string;
    special_ad_categories?: StringFieldUpdateOperationsInput | string;
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    daily_budget?: FloatFieldUpdateOperationsInput | number;
    target?: JsonNullValueInput | InputJsonValue;
    campaign_type?: StringFieldUpdateOperationsInput | string;
    creation_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    campaign_id?: StringFieldUpdateOperationsInput | string;
    adSets?: AdSetUncheckedUpdateManyWithoutCampaignNestedInput;
  };

  export type CampaignCreateManyInput = {
    id?: number;
    name: string;
    status: string;
    buying_type: string;
    objective: string;
    special_ad_categories: string;
    start_time: Date | string;
    end_time: Date | string;
    daily_budget: number;
    target: JsonNullValueInput | InputJsonValue;
    campaign_type: string;
    creation_date?: Date | string;
    campaign_id: string;
  };

  export type CampaignUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    buying_type?: StringFieldUpdateOperationsInput | string;
    objective?: StringFieldUpdateOperationsInput | string;
    special_ad_categories?: StringFieldUpdateOperationsInput | string;
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    daily_budget?: FloatFieldUpdateOperationsInput | number;
    target?: JsonNullValueInput | InputJsonValue;
    campaign_type?: StringFieldUpdateOperationsInput | string;
    creation_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    campaign_id?: StringFieldUpdateOperationsInput | string;
  };

  export type CampaignUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    buying_type?: StringFieldUpdateOperationsInput | string;
    objective?: StringFieldUpdateOperationsInput | string;
    special_ad_categories?: StringFieldUpdateOperationsInput | string;
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    daily_budget?: FloatFieldUpdateOperationsInput | number;
    target?: JsonNullValueInput | InputJsonValue;
    campaign_type?: StringFieldUpdateOperationsInput | string;
    creation_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    campaign_id?: StringFieldUpdateOperationsInput | string;
  };

  export type AdSetCreateInput = {
    name: string;
    status: string;
    targeting: JsonNullValueInput | InputJsonValue;
    billing_event: string;
    bid_amount: number;
    adset_id: string;
    campaign_id: string;
    campaign: CampaignCreateNestedOneWithoutAdSetsInput;
    ads?: AdCreateNestedManyWithoutAdSetInput;
  };

  export type AdSetUncheckedCreateInput = {
    id?: number;
    name: string;
    status: string;
    targeting: JsonNullValueInput | InputJsonValue;
    billing_event: string;
    bid_amount: number;
    adset_id: string;
    campaign_id: string;
    campaignId: number;
    ads?: AdUncheckedCreateNestedManyWithoutAdSetInput;
  };

  export type AdSetUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    targeting?: JsonNullValueInput | InputJsonValue;
    billing_event?: StringFieldUpdateOperationsInput | string;
    bid_amount?: FloatFieldUpdateOperationsInput | number;
    adset_id?: StringFieldUpdateOperationsInput | string;
    campaign_id?: StringFieldUpdateOperationsInput | string;
    campaign?: CampaignUpdateOneRequiredWithoutAdSetsNestedInput;
    ads?: AdUpdateManyWithoutAdSetNestedInput;
  };

  export type AdSetUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    targeting?: JsonNullValueInput | InputJsonValue;
    billing_event?: StringFieldUpdateOperationsInput | string;
    bid_amount?: FloatFieldUpdateOperationsInput | number;
    adset_id?: StringFieldUpdateOperationsInput | string;
    campaign_id?: StringFieldUpdateOperationsInput | string;
    campaignId?: IntFieldUpdateOperationsInput | number;
    ads?: AdUncheckedUpdateManyWithoutAdSetNestedInput;
  };

  export type AdSetCreateManyInput = {
    id?: number;
    name: string;
    status: string;
    targeting: JsonNullValueInput | InputJsonValue;
    billing_event: string;
    bid_amount: number;
    adset_id: string;
    campaign_id: string;
    campaignId: number;
  };

  export type AdSetUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    targeting?: JsonNullValueInput | InputJsonValue;
    billing_event?: StringFieldUpdateOperationsInput | string;
    bid_amount?: FloatFieldUpdateOperationsInput | number;
    adset_id?: StringFieldUpdateOperationsInput | string;
    campaign_id?: StringFieldUpdateOperationsInput | string;
  };

  export type AdSetUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    targeting?: JsonNullValueInput | InputJsonValue;
    billing_event?: StringFieldUpdateOperationsInput | string;
    bid_amount?: FloatFieldUpdateOperationsInput | number;
    adset_id?: StringFieldUpdateOperationsInput | string;
    campaign_id?: StringFieldUpdateOperationsInput | string;
    campaignId?: IntFieldUpdateOperationsInput | number;
  };

  export type AdCreateInput = {
    name: string;
    status: string;
    adset_id: string;
    ad_id: string;
    creative: JsonNullValueInput | InputJsonValue;
    adSet: AdSetCreateNestedOneWithoutAdsInput;
  };

  export type AdUncheckedCreateInput = {
    id?: number;
    name: string;
    status: string;
    adset_id: string;
    ad_id: string;
    adSetId: number;
    creative: JsonNullValueInput | InputJsonValue;
  };

  export type AdUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    adset_id?: StringFieldUpdateOperationsInput | string;
    ad_id?: StringFieldUpdateOperationsInput | string;
    creative?: JsonNullValueInput | InputJsonValue;
    adSet?: AdSetUpdateOneRequiredWithoutAdsNestedInput;
  };

  export type AdUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    adset_id?: StringFieldUpdateOperationsInput | string;
    ad_id?: StringFieldUpdateOperationsInput | string;
    adSetId?: IntFieldUpdateOperationsInput | number;
    creative?: JsonNullValueInput | InputJsonValue;
  };

  export type AdCreateManyInput = {
    id?: number;
    name: string;
    status: string;
    adset_id: string;
    ad_id: string;
    adSetId: number;
    creative: JsonNullValueInput | InputJsonValue;
  };

  export type AdUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    adset_id?: StringFieldUpdateOperationsInput | string;
    ad_id?: StringFieldUpdateOperationsInput | string;
    creative?: JsonNullValueInput | InputJsonValue;
  };

  export type AdUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    adset_id?: StringFieldUpdateOperationsInput | string;
    ad_id?: StringFieldUpdateOperationsInput | string;
    adSetId?: IntFieldUpdateOperationsInput | number;
    creative?: JsonNullValueInput | InputJsonValue;
  };

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[];
    notIn?: number[];
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[];
    notIn?: string[];
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[];
    notIn?: Date[] | string[];
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[];
    notIn?: number[];
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatFilter<$PrismaModel> | number;
  };
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<
          Required<JsonFilterBase<$PrismaModel>>,
          Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, "path">
        >,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, "path">>;

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?:
      | InputJsonValue
      | JsonFieldRefInput<$PrismaModel>
      | JsonNullValueFilter;
    path?: string;
    string_contains?: string | StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>;
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    lt?: InputJsonValue;
    lte?: InputJsonValue;
    gt?: InputJsonValue;
    gte?: InputJsonValue;
    not?:
      | InputJsonValue
      | JsonFieldRefInput<$PrismaModel>
      | JsonNullValueFilter;
  };

  export type AdSetListRelationFilter = {
    every?: AdSetWhereInput;
    some?: AdSetWhereInput;
    none?: AdSetWhereInput;
  };

  export type AdSetOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type CampaignCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    status?: SortOrder;
    buying_type?: SortOrder;
    objective?: SortOrder;
    special_ad_categories?: SortOrder;
    start_time?: SortOrder;
    end_time?: SortOrder;
    daily_budget?: SortOrder;
    target?: SortOrder;
    campaign_type?: SortOrder;
    creation_date?: SortOrder;
    campaign_id?: SortOrder;
  };

  export type CampaignAvgOrderByAggregateInput = {
    id?: SortOrder;
    daily_budget?: SortOrder;
  };

  export type CampaignMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    status?: SortOrder;
    buying_type?: SortOrder;
    objective?: SortOrder;
    special_ad_categories?: SortOrder;
    start_time?: SortOrder;
    end_time?: SortOrder;
    daily_budget?: SortOrder;
    campaign_type?: SortOrder;
    creation_date?: SortOrder;
    campaign_id?: SortOrder;
  };

  export type CampaignMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    status?: SortOrder;
    buying_type?: SortOrder;
    objective?: SortOrder;
    special_ad_categories?: SortOrder;
    start_time?: SortOrder;
    end_time?: SortOrder;
    daily_budget?: SortOrder;
    campaign_type?: SortOrder;
    creation_date?: SortOrder;
    campaign_id?: SortOrder;
  };

  export type CampaignSumOrderByAggregateInput = {
    id?: SortOrder;
    daily_budget?: SortOrder;
  };

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[];
    notIn?: number[];
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[];
    notIn?: string[];
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[];
    notIn?: Date[] | string[];
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[];
    notIn?: number[];
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedFloatFilter<$PrismaModel>;
    _min?: NestedFloatFilter<$PrismaModel>;
    _max?: NestedFloatFilter<$PrismaModel>;
  };
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<
          Required<JsonWithAggregatesFilterBase<$PrismaModel>>,
          Exclude<
            keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>,
            "path"
          >
        >,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<
        Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, "path">
      >;

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?:
      | InputJsonValue
      | JsonFieldRefInput<$PrismaModel>
      | JsonNullValueFilter;
    path?: string;
    string_contains?: string | StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>;
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    lt?: InputJsonValue;
    lte?: InputJsonValue;
    gt?: InputJsonValue;
    gte?: InputJsonValue;
    not?:
      | InputJsonValue
      | JsonFieldRefInput<$PrismaModel>
      | JsonNullValueFilter;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedJsonFilter<$PrismaModel>;
    _max?: NestedJsonFilter<$PrismaModel>;
  };

  export type CampaignRelationFilter = {
    is?: CampaignWhereInput;
    isNot?: CampaignWhereInput;
  };

  export type AdListRelationFilter = {
    every?: AdWhereInput;
    some?: AdWhereInput;
    none?: AdWhereInput;
  };

  export type AdOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type AdSetCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    status?: SortOrder;
    targeting?: SortOrder;
    billing_event?: SortOrder;
    bid_amount?: SortOrder;
    adset_id?: SortOrder;
    campaign_id?: SortOrder;
    campaignId?: SortOrder;
  };

  export type AdSetAvgOrderByAggregateInput = {
    id?: SortOrder;
    bid_amount?: SortOrder;
    campaignId?: SortOrder;
  };

  export type AdSetMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    status?: SortOrder;
    billing_event?: SortOrder;
    bid_amount?: SortOrder;
    adset_id?: SortOrder;
    campaign_id?: SortOrder;
    campaignId?: SortOrder;
  };

  export type AdSetMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    status?: SortOrder;
    billing_event?: SortOrder;
    bid_amount?: SortOrder;
    adset_id?: SortOrder;
    campaign_id?: SortOrder;
    campaignId?: SortOrder;
  };

  export type AdSetSumOrderByAggregateInput = {
    id?: SortOrder;
    bid_amount?: SortOrder;
    campaignId?: SortOrder;
  };

  export type AdSetRelationFilter = {
    is?: AdSetWhereInput;
    isNot?: AdSetWhereInput;
  };

  export type AdCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    status?: SortOrder;
    adset_id?: SortOrder;
    ad_id?: SortOrder;
    adSetId?: SortOrder;
    creative?: SortOrder;
  };

  export type AdAvgOrderByAggregateInput = {
    id?: SortOrder;
    adSetId?: SortOrder;
  };

  export type AdMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    status?: SortOrder;
    adset_id?: SortOrder;
    ad_id?: SortOrder;
    adSetId?: SortOrder;
  };

  export type AdMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    status?: SortOrder;
    adset_id?: SortOrder;
    ad_id?: SortOrder;
    adSetId?: SortOrder;
  };

  export type AdSumOrderByAggregateInput = {
    id?: SortOrder;
    adSetId?: SortOrder;
  };

  export type AdSetCreateNestedManyWithoutCampaignInput = {
    create?:
      | XOR<
          AdSetCreateWithoutCampaignInput,
          AdSetUncheckedCreateWithoutCampaignInput
        >
      | AdSetCreateWithoutCampaignInput[]
      | AdSetUncheckedCreateWithoutCampaignInput[];
    connectOrCreate?:
      | AdSetCreateOrConnectWithoutCampaignInput
      | AdSetCreateOrConnectWithoutCampaignInput[];
    createMany?: AdSetCreateManyCampaignInputEnvelope;
    connect?: AdSetWhereUniqueInput | AdSetWhereUniqueInput[];
  };

  export type AdSetUncheckedCreateNestedManyWithoutCampaignInput = {
    create?:
      | XOR<
          AdSetCreateWithoutCampaignInput,
          AdSetUncheckedCreateWithoutCampaignInput
        >
      | AdSetCreateWithoutCampaignInput[]
      | AdSetUncheckedCreateWithoutCampaignInput[];
    connectOrCreate?:
      | AdSetCreateOrConnectWithoutCampaignInput
      | AdSetCreateOrConnectWithoutCampaignInput[];
    createMany?: AdSetCreateManyCampaignInputEnvelope;
    connect?: AdSetWhereUniqueInput | AdSetWhereUniqueInput[];
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type FloatFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type AdSetUpdateManyWithoutCampaignNestedInput = {
    create?:
      | XOR<
          AdSetCreateWithoutCampaignInput,
          AdSetUncheckedCreateWithoutCampaignInput
        >
      | AdSetCreateWithoutCampaignInput[]
      | AdSetUncheckedCreateWithoutCampaignInput[];
    connectOrCreate?:
      | AdSetCreateOrConnectWithoutCampaignInput
      | AdSetCreateOrConnectWithoutCampaignInput[];
    upsert?:
      | AdSetUpsertWithWhereUniqueWithoutCampaignInput
      | AdSetUpsertWithWhereUniqueWithoutCampaignInput[];
    createMany?: AdSetCreateManyCampaignInputEnvelope;
    set?: AdSetWhereUniqueInput | AdSetWhereUniqueInput[];
    disconnect?: AdSetWhereUniqueInput | AdSetWhereUniqueInput[];
    delete?: AdSetWhereUniqueInput | AdSetWhereUniqueInput[];
    connect?: AdSetWhereUniqueInput | AdSetWhereUniqueInput[];
    update?:
      | AdSetUpdateWithWhereUniqueWithoutCampaignInput
      | AdSetUpdateWithWhereUniqueWithoutCampaignInput[];
    updateMany?:
      | AdSetUpdateManyWithWhereWithoutCampaignInput
      | AdSetUpdateManyWithWhereWithoutCampaignInput[];
    deleteMany?: AdSetScalarWhereInput | AdSetScalarWhereInput[];
  };

  export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type AdSetUncheckedUpdateManyWithoutCampaignNestedInput = {
    create?:
      | XOR<
          AdSetCreateWithoutCampaignInput,
          AdSetUncheckedCreateWithoutCampaignInput
        >
      | AdSetCreateWithoutCampaignInput[]
      | AdSetUncheckedCreateWithoutCampaignInput[];
    connectOrCreate?:
      | AdSetCreateOrConnectWithoutCampaignInput
      | AdSetCreateOrConnectWithoutCampaignInput[];
    upsert?:
      | AdSetUpsertWithWhereUniqueWithoutCampaignInput
      | AdSetUpsertWithWhereUniqueWithoutCampaignInput[];
    createMany?: AdSetCreateManyCampaignInputEnvelope;
    set?: AdSetWhereUniqueInput | AdSetWhereUniqueInput[];
    disconnect?: AdSetWhereUniqueInput | AdSetWhereUniqueInput[];
    delete?: AdSetWhereUniqueInput | AdSetWhereUniqueInput[];
    connect?: AdSetWhereUniqueInput | AdSetWhereUniqueInput[];
    update?:
      | AdSetUpdateWithWhereUniqueWithoutCampaignInput
      | AdSetUpdateWithWhereUniqueWithoutCampaignInput[];
    updateMany?:
      | AdSetUpdateManyWithWhereWithoutCampaignInput
      | AdSetUpdateManyWithWhereWithoutCampaignInput[];
    deleteMany?: AdSetScalarWhereInput | AdSetScalarWhereInput[];
  };

  export type CampaignCreateNestedOneWithoutAdSetsInput = {
    create?: XOR<
      CampaignCreateWithoutAdSetsInput,
      CampaignUncheckedCreateWithoutAdSetsInput
    >;
    connectOrCreate?: CampaignCreateOrConnectWithoutAdSetsInput;
    connect?: CampaignWhereUniqueInput;
  };

  export type AdCreateNestedManyWithoutAdSetInput = {
    create?:
      | XOR<AdCreateWithoutAdSetInput, AdUncheckedCreateWithoutAdSetInput>
      | AdCreateWithoutAdSetInput[]
      | AdUncheckedCreateWithoutAdSetInput[];
    connectOrCreate?:
      | AdCreateOrConnectWithoutAdSetInput
      | AdCreateOrConnectWithoutAdSetInput[];
    createMany?: AdCreateManyAdSetInputEnvelope;
    connect?: AdWhereUniqueInput | AdWhereUniqueInput[];
  };

  export type AdUncheckedCreateNestedManyWithoutAdSetInput = {
    create?:
      | XOR<AdCreateWithoutAdSetInput, AdUncheckedCreateWithoutAdSetInput>
      | AdCreateWithoutAdSetInput[]
      | AdUncheckedCreateWithoutAdSetInput[];
    connectOrCreate?:
      | AdCreateOrConnectWithoutAdSetInput
      | AdCreateOrConnectWithoutAdSetInput[];
    createMany?: AdCreateManyAdSetInputEnvelope;
    connect?: AdWhereUniqueInput | AdWhereUniqueInput[];
  };

  export type CampaignUpdateOneRequiredWithoutAdSetsNestedInput = {
    create?: XOR<
      CampaignCreateWithoutAdSetsInput,
      CampaignUncheckedCreateWithoutAdSetsInput
    >;
    connectOrCreate?: CampaignCreateOrConnectWithoutAdSetsInput;
    upsert?: CampaignUpsertWithoutAdSetsInput;
    connect?: CampaignWhereUniqueInput;
    update?: XOR<
      XOR<
        CampaignUpdateToOneWithWhereWithoutAdSetsInput,
        CampaignUpdateWithoutAdSetsInput
      >,
      CampaignUncheckedUpdateWithoutAdSetsInput
    >;
  };

  export type AdUpdateManyWithoutAdSetNestedInput = {
    create?:
      | XOR<AdCreateWithoutAdSetInput, AdUncheckedCreateWithoutAdSetInput>
      | AdCreateWithoutAdSetInput[]
      | AdUncheckedCreateWithoutAdSetInput[];
    connectOrCreate?:
      | AdCreateOrConnectWithoutAdSetInput
      | AdCreateOrConnectWithoutAdSetInput[];
    upsert?:
      | AdUpsertWithWhereUniqueWithoutAdSetInput
      | AdUpsertWithWhereUniqueWithoutAdSetInput[];
    createMany?: AdCreateManyAdSetInputEnvelope;
    set?: AdWhereUniqueInput | AdWhereUniqueInput[];
    disconnect?: AdWhereUniqueInput | AdWhereUniqueInput[];
    delete?: AdWhereUniqueInput | AdWhereUniqueInput[];
    connect?: AdWhereUniqueInput | AdWhereUniqueInput[];
    update?:
      | AdUpdateWithWhereUniqueWithoutAdSetInput
      | AdUpdateWithWhereUniqueWithoutAdSetInput[];
    updateMany?:
      | AdUpdateManyWithWhereWithoutAdSetInput
      | AdUpdateManyWithWhereWithoutAdSetInput[];
    deleteMany?: AdScalarWhereInput | AdScalarWhereInput[];
  };

  export type AdUncheckedUpdateManyWithoutAdSetNestedInput = {
    create?:
      | XOR<AdCreateWithoutAdSetInput, AdUncheckedCreateWithoutAdSetInput>
      | AdCreateWithoutAdSetInput[]
      | AdUncheckedCreateWithoutAdSetInput[];
    connectOrCreate?:
      | AdCreateOrConnectWithoutAdSetInput
      | AdCreateOrConnectWithoutAdSetInput[];
    upsert?:
      | AdUpsertWithWhereUniqueWithoutAdSetInput
      | AdUpsertWithWhereUniqueWithoutAdSetInput[];
    createMany?: AdCreateManyAdSetInputEnvelope;
    set?: AdWhereUniqueInput | AdWhereUniqueInput[];
    disconnect?: AdWhereUniqueInput | AdWhereUniqueInput[];
    delete?: AdWhereUniqueInput | AdWhereUniqueInput[];
    connect?: AdWhereUniqueInput | AdWhereUniqueInput[];
    update?:
      | AdUpdateWithWhereUniqueWithoutAdSetInput
      | AdUpdateWithWhereUniqueWithoutAdSetInput[];
    updateMany?:
      | AdUpdateManyWithWhereWithoutAdSetInput
      | AdUpdateManyWithWhereWithoutAdSetInput[];
    deleteMany?: AdScalarWhereInput | AdScalarWhereInput[];
  };

  export type AdSetCreateNestedOneWithoutAdsInput = {
    create?: XOR<
      AdSetCreateWithoutAdsInput,
      AdSetUncheckedCreateWithoutAdsInput
    >;
    connectOrCreate?: AdSetCreateOrConnectWithoutAdsInput;
    connect?: AdSetWhereUniqueInput;
  };

  export type AdSetUpdateOneRequiredWithoutAdsNestedInput = {
    create?: XOR<
      AdSetCreateWithoutAdsInput,
      AdSetUncheckedCreateWithoutAdsInput
    >;
    connectOrCreate?: AdSetCreateOrConnectWithoutAdsInput;
    upsert?: AdSetUpsertWithoutAdsInput;
    connect?: AdSetWhereUniqueInput;
    update?: XOR<
      XOR<AdSetUpdateToOneWithWhereWithoutAdsInput, AdSetUpdateWithoutAdsInput>,
      AdSetUncheckedUpdateWithoutAdsInput
    >;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[];
    notIn?: number[];
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[];
    notIn?: string[];
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[];
    notIn?: Date[] | string[];
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[];
    notIn?: number[];
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatFilter<$PrismaModel> | number;
  };

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[];
    notIn?: number[];
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[];
    notIn?: string[];
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[];
    notIn?: Date[] | string[];
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[];
    notIn?: number[];
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedFloatFilter<$PrismaModel>;
    _min?: NestedFloatFilter<$PrismaModel>;
    _max?: NestedFloatFilter<$PrismaModel>;
  };
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<
          Required<NestedJsonFilterBase<$PrismaModel>>,
          Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, "path">
        >,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, "path">>;

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?:
      | InputJsonValue
      | JsonFieldRefInput<$PrismaModel>
      | JsonNullValueFilter;
    path?: string;
    string_contains?: string | StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>;
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null;
    lt?: InputJsonValue;
    lte?: InputJsonValue;
    gt?: InputJsonValue;
    gte?: InputJsonValue;
    not?:
      | InputJsonValue
      | JsonFieldRefInput<$PrismaModel>
      | JsonNullValueFilter;
  };

  export type AdSetCreateWithoutCampaignInput = {
    name: string;
    status: string;
    targeting: JsonNullValueInput | InputJsonValue;
    billing_event: string;
    bid_amount: number;
    adset_id: string;
    campaign_id: string;
    ads?: AdCreateNestedManyWithoutAdSetInput;
  };

  export type AdSetUncheckedCreateWithoutCampaignInput = {
    id?: number;
    name: string;
    status: string;
    targeting: JsonNullValueInput | InputJsonValue;
    billing_event: string;
    bid_amount: number;
    adset_id: string;
    campaign_id: string;
    ads?: AdUncheckedCreateNestedManyWithoutAdSetInput;
  };

  export type AdSetCreateOrConnectWithoutCampaignInput = {
    where: AdSetWhereUniqueInput;
    create: XOR<
      AdSetCreateWithoutCampaignInput,
      AdSetUncheckedCreateWithoutCampaignInput
    >;
  };

  export type AdSetCreateManyCampaignInputEnvelope = {
    data: AdSetCreateManyCampaignInput | AdSetCreateManyCampaignInput[];
    skipDuplicates?: boolean;
  };

  export type AdSetUpsertWithWhereUniqueWithoutCampaignInput = {
    where: AdSetWhereUniqueInput;
    update: XOR<
      AdSetUpdateWithoutCampaignInput,
      AdSetUncheckedUpdateWithoutCampaignInput
    >;
    create: XOR<
      AdSetCreateWithoutCampaignInput,
      AdSetUncheckedCreateWithoutCampaignInput
    >;
  };

  export type AdSetUpdateWithWhereUniqueWithoutCampaignInput = {
    where: AdSetWhereUniqueInput;
    data: XOR<
      AdSetUpdateWithoutCampaignInput,
      AdSetUncheckedUpdateWithoutCampaignInput
    >;
  };

  export type AdSetUpdateManyWithWhereWithoutCampaignInput = {
    where: AdSetScalarWhereInput;
    data: XOR<
      AdSetUpdateManyMutationInput,
      AdSetUncheckedUpdateManyWithoutCampaignInput
    >;
  };

  export type AdSetScalarWhereInput = {
    AND?: AdSetScalarWhereInput | AdSetScalarWhereInput[];
    OR?: AdSetScalarWhereInput[];
    NOT?: AdSetScalarWhereInput | AdSetScalarWhereInput[];
    id?: IntFilter<"AdSet"> | number;
    name?: StringFilter<"AdSet"> | string;
    status?: StringFilter<"AdSet"> | string;
    targeting?: JsonFilter<"AdSet">;
    billing_event?: StringFilter<"AdSet"> | string;
    bid_amount?: FloatFilter<"AdSet"> | number;
    adset_id?: StringFilter<"AdSet"> | string;
    campaign_id?: StringFilter<"AdSet"> | string;
    campaignId?: IntFilter<"AdSet"> | number;
  };

  export type CampaignCreateWithoutAdSetsInput = {
    name: string;
    status: string;
    buying_type: string;
    objective: string;
    special_ad_categories: string;
    start_time: Date | string;
    end_time: Date | string;
    daily_budget: number;
    target: JsonNullValueInput | InputJsonValue;
    campaign_type: string;
    creation_date?: Date | string;
    campaign_id: string;
  };

  export type CampaignUncheckedCreateWithoutAdSetsInput = {
    id?: number;
    name: string;
    status: string;
    buying_type: string;
    objective: string;
    special_ad_categories: string;
    start_time: Date | string;
    end_time: Date | string;
    daily_budget: number;
    target: JsonNullValueInput | InputJsonValue;
    campaign_type: string;
    creation_date?: Date | string;
    campaign_id: string;
  };

  export type CampaignCreateOrConnectWithoutAdSetsInput = {
    where: CampaignWhereUniqueInput;
    create: XOR<
      CampaignCreateWithoutAdSetsInput,
      CampaignUncheckedCreateWithoutAdSetsInput
    >;
  };

  export type AdCreateWithoutAdSetInput = {
    name: string;
    status: string;
    adset_id: string;
    ad_id: string;
    creative: JsonNullValueInput | InputJsonValue;
  };

  export type AdUncheckedCreateWithoutAdSetInput = {
    id?: number;
    name: string;
    status: string;
    adset_id: string;
    ad_id: string;
    creative: JsonNullValueInput | InputJsonValue;
  };

  export type AdCreateOrConnectWithoutAdSetInput = {
    where: AdWhereUniqueInput;
    create: XOR<AdCreateWithoutAdSetInput, AdUncheckedCreateWithoutAdSetInput>;
  };

  export type AdCreateManyAdSetInputEnvelope = {
    data: AdCreateManyAdSetInput | AdCreateManyAdSetInput[];
    skipDuplicates?: boolean;
  };

  export type CampaignUpsertWithoutAdSetsInput = {
    update: XOR<
      CampaignUpdateWithoutAdSetsInput,
      CampaignUncheckedUpdateWithoutAdSetsInput
    >;
    create: XOR<
      CampaignCreateWithoutAdSetsInput,
      CampaignUncheckedCreateWithoutAdSetsInput
    >;
    where?: CampaignWhereInput;
  };

  export type CampaignUpdateToOneWithWhereWithoutAdSetsInput = {
    where?: CampaignWhereInput;
    data: XOR<
      CampaignUpdateWithoutAdSetsInput,
      CampaignUncheckedUpdateWithoutAdSetsInput
    >;
  };

  export type CampaignUpdateWithoutAdSetsInput = {
    name?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    buying_type?: StringFieldUpdateOperationsInput | string;
    objective?: StringFieldUpdateOperationsInput | string;
    special_ad_categories?: StringFieldUpdateOperationsInput | string;
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    daily_budget?: FloatFieldUpdateOperationsInput | number;
    target?: JsonNullValueInput | InputJsonValue;
    campaign_type?: StringFieldUpdateOperationsInput | string;
    creation_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    campaign_id?: StringFieldUpdateOperationsInput | string;
  };

  export type CampaignUncheckedUpdateWithoutAdSetsInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    buying_type?: StringFieldUpdateOperationsInput | string;
    objective?: StringFieldUpdateOperationsInput | string;
    special_ad_categories?: StringFieldUpdateOperationsInput | string;
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string;
    daily_budget?: FloatFieldUpdateOperationsInput | number;
    target?: JsonNullValueInput | InputJsonValue;
    campaign_type?: StringFieldUpdateOperationsInput | string;
    creation_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    campaign_id?: StringFieldUpdateOperationsInput | string;
  };

  export type AdUpsertWithWhereUniqueWithoutAdSetInput = {
    where: AdWhereUniqueInput;
    update: XOR<AdUpdateWithoutAdSetInput, AdUncheckedUpdateWithoutAdSetInput>;
    create: XOR<AdCreateWithoutAdSetInput, AdUncheckedCreateWithoutAdSetInput>;
  };

  export type AdUpdateWithWhereUniqueWithoutAdSetInput = {
    where: AdWhereUniqueInput;
    data: XOR<AdUpdateWithoutAdSetInput, AdUncheckedUpdateWithoutAdSetInput>;
  };

  export type AdUpdateManyWithWhereWithoutAdSetInput = {
    where: AdScalarWhereInput;
    data: XOR<
      AdUpdateManyMutationInput,
      AdUncheckedUpdateManyWithoutAdSetInput
    >;
  };

  export type AdScalarWhereInput = {
    AND?: AdScalarWhereInput | AdScalarWhereInput[];
    OR?: AdScalarWhereInput[];
    NOT?: AdScalarWhereInput | AdScalarWhereInput[];
    id?: IntFilter<"Ad"> | number;
    name?: StringFilter<"Ad"> | string;
    status?: StringFilter<"Ad"> | string;
    adset_id?: StringFilter<"Ad"> | string;
    ad_id?: StringFilter<"Ad"> | string;
    adSetId?: IntFilter<"Ad"> | number;
    creative?: JsonFilter<"Ad">;
  };

  export type AdSetCreateWithoutAdsInput = {
    name: string;
    status: string;
    targeting: JsonNullValueInput | InputJsonValue;
    billing_event: string;
    bid_amount: number;
    adset_id: string;
    campaign_id: string;
    campaign: CampaignCreateNestedOneWithoutAdSetsInput;
  };

  export type AdSetUncheckedCreateWithoutAdsInput = {
    id?: number;
    name: string;
    status: string;
    targeting: JsonNullValueInput | InputJsonValue;
    billing_event: string;
    bid_amount: number;
    adset_id: string;
    campaign_id: string;
    campaignId: number;
  };

  export type AdSetCreateOrConnectWithoutAdsInput = {
    where: AdSetWhereUniqueInput;
    create: XOR<
      AdSetCreateWithoutAdsInput,
      AdSetUncheckedCreateWithoutAdsInput
    >;
  };

  export type AdSetUpsertWithoutAdsInput = {
    update: XOR<
      AdSetUpdateWithoutAdsInput,
      AdSetUncheckedUpdateWithoutAdsInput
    >;
    create: XOR<
      AdSetCreateWithoutAdsInput,
      AdSetUncheckedCreateWithoutAdsInput
    >;
    where?: AdSetWhereInput;
  };

  export type AdSetUpdateToOneWithWhereWithoutAdsInput = {
    where?: AdSetWhereInput;
    data: XOR<AdSetUpdateWithoutAdsInput, AdSetUncheckedUpdateWithoutAdsInput>;
  };

  export type AdSetUpdateWithoutAdsInput = {
    name?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    targeting?: JsonNullValueInput | InputJsonValue;
    billing_event?: StringFieldUpdateOperationsInput | string;
    bid_amount?: FloatFieldUpdateOperationsInput | number;
    adset_id?: StringFieldUpdateOperationsInput | string;
    campaign_id?: StringFieldUpdateOperationsInput | string;
    campaign?: CampaignUpdateOneRequiredWithoutAdSetsNestedInput;
  };

  export type AdSetUncheckedUpdateWithoutAdsInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    targeting?: JsonNullValueInput | InputJsonValue;
    billing_event?: StringFieldUpdateOperationsInput | string;
    bid_amount?: FloatFieldUpdateOperationsInput | number;
    adset_id?: StringFieldUpdateOperationsInput | string;
    campaign_id?: StringFieldUpdateOperationsInput | string;
    campaignId?: IntFieldUpdateOperationsInput | number;
  };

  export type AdSetCreateManyCampaignInput = {
    id?: number;
    name: string;
    status: string;
    targeting: JsonNullValueInput | InputJsonValue;
    billing_event: string;
    bid_amount: number;
    adset_id: string;
    campaign_id: string;
  };

  export type AdSetUpdateWithoutCampaignInput = {
    name?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    targeting?: JsonNullValueInput | InputJsonValue;
    billing_event?: StringFieldUpdateOperationsInput | string;
    bid_amount?: FloatFieldUpdateOperationsInput | number;
    adset_id?: StringFieldUpdateOperationsInput | string;
    campaign_id?: StringFieldUpdateOperationsInput | string;
    ads?: AdUpdateManyWithoutAdSetNestedInput;
  };

  export type AdSetUncheckedUpdateWithoutCampaignInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    targeting?: JsonNullValueInput | InputJsonValue;
    billing_event?: StringFieldUpdateOperationsInput | string;
    bid_amount?: FloatFieldUpdateOperationsInput | number;
    adset_id?: StringFieldUpdateOperationsInput | string;
    campaign_id?: StringFieldUpdateOperationsInput | string;
    ads?: AdUncheckedUpdateManyWithoutAdSetNestedInput;
  };

  export type AdSetUncheckedUpdateManyWithoutCampaignInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    targeting?: JsonNullValueInput | InputJsonValue;
    billing_event?: StringFieldUpdateOperationsInput | string;
    bid_amount?: FloatFieldUpdateOperationsInput | number;
    adset_id?: StringFieldUpdateOperationsInput | string;
    campaign_id?: StringFieldUpdateOperationsInput | string;
  };

  export type AdCreateManyAdSetInput = {
    id?: number;
    name: string;
    status: string;
    adset_id: string;
    ad_id: string;
    creative: JsonNullValueInput | InputJsonValue;
  };

  export type AdUpdateWithoutAdSetInput = {
    name?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    adset_id?: StringFieldUpdateOperationsInput | string;
    ad_id?: StringFieldUpdateOperationsInput | string;
    creative?: JsonNullValueInput | InputJsonValue;
  };

  export type AdUncheckedUpdateWithoutAdSetInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    adset_id?: StringFieldUpdateOperationsInput | string;
    ad_id?: StringFieldUpdateOperationsInput | string;
    creative?: JsonNullValueInput | InputJsonValue;
  };

  export type AdUncheckedUpdateManyWithoutAdSetInput = {
    id?: IntFieldUpdateOperationsInput | number;
    name?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    adset_id?: StringFieldUpdateOperationsInput | string;
    ad_id?: StringFieldUpdateOperationsInput | string;
    creative?: JsonNullValueInput | InputJsonValue;
  };

  /**
   * Aliases for legacy arg types
   */
  /**
   * @deprecated Use CampaignCountOutputTypeDefaultArgs instead
   */
  export type CampaignCountOutputTypeArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = CampaignCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use AdSetCountOutputTypeDefaultArgs instead
   */
  export type AdSetCountOutputTypeArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = AdSetCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use CampaignDefaultArgs instead
   */
  export type CampaignArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = CampaignDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use AdSetDefaultArgs instead
   */
  export type AdSetArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = AdSetDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use AdDefaultArgs instead
   */
  export type AdArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = AdDefaultArgs<ExtArgs>;

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}
