
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Meal
 * 
 */
export type Meal = $Result.DefaultSelection<Prisma.$MealPayload>
/**
 * Model Ingredient
 * 
 */
export type Ingredient = $Result.DefaultSelection<Prisma.$IngredientPayload>
/**
 * Model MealIngredient
 * 
 */
export type MealIngredient = $Result.DefaultSelection<Prisma.$MealIngredientPayload>
/**
 * Model MealSchedule
 * 
 */
export type MealSchedule = $Result.DefaultSelection<Prisma.$MealSchedulePayload>
/**
 * Model Comment
 * 
 */
export type Comment = $Result.DefaultSelection<Prisma.$CommentPayload>
/**
 * Model Rating
 * 
 */
export type Rating = $Result.DefaultSelection<Prisma.$RatingPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Category: {
  STARTER: 'STARTER',
  MAIN_COURSE: 'MAIN_COURSE',
  DESSERT: 'DESSERT'
};

export type Category = (typeof Category)[keyof typeof Category]

}

export type Category = $Enums.Category

export const Category: typeof $Enums.Category

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Meals
 * const meals = await prisma.meal.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Meals
   * const meals = await prisma.meal.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.PrismaClientConstructorArgs<ClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.meal`: Exposes CRUD operations for the **Meal** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Meals
    * const meals = await prisma.meal.findMany()
    * ```
    */
  get meal(): Prisma.MealDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ingredient`: Exposes CRUD operations for the **Ingredient** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ingredients
    * const ingredients = await prisma.ingredient.findMany()
    * ```
    */
  get ingredient(): Prisma.IngredientDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mealIngredient`: Exposes CRUD operations for the **MealIngredient** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MealIngredients
    * const mealIngredients = await prisma.mealIngredient.findMany()
    * ```
    */
  get mealIngredient(): Prisma.MealIngredientDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mealSchedule`: Exposes CRUD operations for the **MealSchedule** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MealSchedules
    * const mealSchedules = await prisma.mealSchedule.findMany()
    * ```
    */
  get mealSchedule(): Prisma.MealScheduleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.comment`: Exposes CRUD operations for the **Comment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Comments
    * const comments = await prisma.comment.findMany()
    * ```
    */
  get comment(): Prisma.CommentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rating`: Exposes CRUD operations for the **Rating** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ratings
    * const ratings = await prisma.rating.findMany()
    * ```
    */
  get rating(): Prisma.RatingDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.10.1
   * Query Engine version: d1b3f377ca835d73fd50954a5e22128b9ebdd6b8
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * Resolved type of the argument passed to the `PrismaClient` constructor.
   *
   * When called without a narrower options type (the common case), this resolves
   * to `PrismaClientOptions` directly, which produces a clear TypeScript error
   * message (`not assignable to parameter of type 'PrismaClientOptions'`) when
   * the argument is missing or incomplete. When the user supplies a narrower
   * options type (e.g. via a literal), it falls back to `Subset` to keep
   * filtering out unknown properties.
   */
  export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> =
    [PrismaClientOptions] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      ((Without<T, U> & U) | (Without<U, T> & T)) & object
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
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
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Meal: 'Meal',
    Ingredient: 'Ingredient',
    MealIngredient: 'MealIngredient',
    MealSchedule: 'MealSchedule',
    Comment: 'Comment',
    Rating: 'Rating'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "meal" | "ingredient" | "mealIngredient" | "mealSchedule" | "comment" | "rating"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Meal: {
        payload: Prisma.$MealPayload<ExtArgs>
        fields: Prisma.MealFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MealFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MealFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPayload>
          }
          findFirst: {
            args: Prisma.MealFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MealFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPayload>
          }
          findMany: {
            args: Prisma.MealFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPayload>[]
          }
          create: {
            args: Prisma.MealCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPayload>
          }
          createMany: {
            args: Prisma.MealCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MealCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPayload>[]
          }
          delete: {
            args: Prisma.MealDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPayload>
          }
          update: {
            args: Prisma.MealUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPayload>
          }
          deleteMany: {
            args: Prisma.MealDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MealUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MealUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPayload>[]
          }
          upsert: {
            args: Prisma.MealUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPayload>
          }
          aggregate: {
            args: Prisma.MealAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMeal>
          }
          groupBy: {
            args: Prisma.MealGroupByArgs<ExtArgs>
            result: $Utils.Optional<MealGroupByOutputType>[]
          }
          count: {
            args: Prisma.MealCountArgs<ExtArgs>
            result: $Utils.Optional<MealCountAggregateOutputType> | number
          }
        }
      }
      Ingredient: {
        payload: Prisma.$IngredientPayload<ExtArgs>
        fields: Prisma.IngredientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IngredientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IngredientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload>
          }
          findFirst: {
            args: Prisma.IngredientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IngredientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload>
          }
          findMany: {
            args: Prisma.IngredientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload>[]
          }
          create: {
            args: Prisma.IngredientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload>
          }
          createMany: {
            args: Prisma.IngredientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.IngredientCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload>[]
          }
          delete: {
            args: Prisma.IngredientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload>
          }
          update: {
            args: Prisma.IngredientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload>
          }
          deleteMany: {
            args: Prisma.IngredientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IngredientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.IngredientUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload>[]
          }
          upsert: {
            args: Prisma.IngredientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IngredientPayload>
          }
          aggregate: {
            args: Prisma.IngredientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIngredient>
          }
          groupBy: {
            args: Prisma.IngredientGroupByArgs<ExtArgs>
            result: $Utils.Optional<IngredientGroupByOutputType>[]
          }
          count: {
            args: Prisma.IngredientCountArgs<ExtArgs>
            result: $Utils.Optional<IngredientCountAggregateOutputType> | number
          }
        }
      }
      MealIngredient: {
        payload: Prisma.$MealIngredientPayload<ExtArgs>
        fields: Prisma.MealIngredientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MealIngredientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealIngredientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MealIngredientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealIngredientPayload>
          }
          findFirst: {
            args: Prisma.MealIngredientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealIngredientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MealIngredientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealIngredientPayload>
          }
          findMany: {
            args: Prisma.MealIngredientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealIngredientPayload>[]
          }
          create: {
            args: Prisma.MealIngredientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealIngredientPayload>
          }
          createMany: {
            args: Prisma.MealIngredientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MealIngredientCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealIngredientPayload>[]
          }
          delete: {
            args: Prisma.MealIngredientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealIngredientPayload>
          }
          update: {
            args: Prisma.MealIngredientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealIngredientPayload>
          }
          deleteMany: {
            args: Prisma.MealIngredientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MealIngredientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MealIngredientUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealIngredientPayload>[]
          }
          upsert: {
            args: Prisma.MealIngredientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealIngredientPayload>
          }
          aggregate: {
            args: Prisma.MealIngredientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMealIngredient>
          }
          groupBy: {
            args: Prisma.MealIngredientGroupByArgs<ExtArgs>
            result: $Utils.Optional<MealIngredientGroupByOutputType>[]
          }
          count: {
            args: Prisma.MealIngredientCountArgs<ExtArgs>
            result: $Utils.Optional<MealIngredientCountAggregateOutputType> | number
          }
        }
      }
      MealSchedule: {
        payload: Prisma.$MealSchedulePayload<ExtArgs>
        fields: Prisma.MealScheduleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MealScheduleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealSchedulePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MealScheduleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealSchedulePayload>
          }
          findFirst: {
            args: Prisma.MealScheduleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealSchedulePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MealScheduleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealSchedulePayload>
          }
          findMany: {
            args: Prisma.MealScheduleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealSchedulePayload>[]
          }
          create: {
            args: Prisma.MealScheduleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealSchedulePayload>
          }
          createMany: {
            args: Prisma.MealScheduleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MealScheduleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealSchedulePayload>[]
          }
          delete: {
            args: Prisma.MealScheduleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealSchedulePayload>
          }
          update: {
            args: Prisma.MealScheduleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealSchedulePayload>
          }
          deleteMany: {
            args: Prisma.MealScheduleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MealScheduleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MealScheduleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealSchedulePayload>[]
          }
          upsert: {
            args: Prisma.MealScheduleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealSchedulePayload>
          }
          aggregate: {
            args: Prisma.MealScheduleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMealSchedule>
          }
          groupBy: {
            args: Prisma.MealScheduleGroupByArgs<ExtArgs>
            result: $Utils.Optional<MealScheduleGroupByOutputType>[]
          }
          count: {
            args: Prisma.MealScheduleCountArgs<ExtArgs>
            result: $Utils.Optional<MealScheduleCountAggregateOutputType> | number
          }
        }
      }
      Comment: {
        payload: Prisma.$CommentPayload<ExtArgs>
        fields: Prisma.CommentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findFirst: {
            args: Prisma.CommentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          findMany: {
            args: Prisma.CommentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          create: {
            args: Prisma.CommentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          createMany: {
            args: Prisma.CommentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CommentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          delete: {
            args: Prisma.CommentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          update: {
            args: Prisma.CommentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          deleteMany: {
            args: Prisma.CommentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CommentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>[]
          }
          upsert: {
            args: Prisma.CommentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommentPayload>
          }
          aggregate: {
            args: Prisma.CommentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateComment>
          }
          groupBy: {
            args: Prisma.CommentGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommentGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommentCountArgs<ExtArgs>
            result: $Utils.Optional<CommentCountAggregateOutputType> | number
          }
        }
      }
      Rating: {
        payload: Prisma.$RatingPayload<ExtArgs>
        fields: Prisma.RatingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RatingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RatingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>
          }
          findFirst: {
            args: Prisma.RatingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RatingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>
          }
          findMany: {
            args: Prisma.RatingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>[]
          }
          create: {
            args: Prisma.RatingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>
          }
          createMany: {
            args: Prisma.RatingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RatingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>[]
          }
          delete: {
            args: Prisma.RatingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>
          }
          update: {
            args: Prisma.RatingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>
          }
          deleteMany: {
            args: Prisma.RatingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RatingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RatingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>[]
          }
          upsert: {
            args: Prisma.RatingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>
          }
          aggregate: {
            args: Prisma.RatingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRating>
          }
          groupBy: {
            args: Prisma.RatingGroupByArgs<ExtArgs>
            result: $Utils.Optional<RatingGroupByOutputType>[]
          }
          count: {
            args: Prisma.RatingCountArgs<ExtArgs>
            result: $Utils.Optional<RatingCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * A driver adapter that PrismaClient uses to connect to your database, such as the ones provided by `@prisma/adapter-pg`, `@prisma/adapter-libsql`, `@prisma/adapter-planetscale`, etc.
     * 
     * A driver adapter is **required** unless you connect to your database through Prisma Accelerate (in which case use `accelerateUrl` instead).
     * 
     * Learn more: https://pris.ly/d/driver-adapters
     * 
     * @example
     * ```ts
     * import { PrismaPg } from '@prisma/adapter-pg'
     * import { PrismaClient } from './generated/prisma/client'
     * 
     * const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
     * const prisma = new PrismaClient({ adapter })
     * ```
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * The Prisma Accelerate connection URL. Use this option to connect to your database through Prisma Accelerate instead of using a driver adapter to connect directly.
     * 
     * Learn more: https://pris.ly/d/accelerate
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    meal?: MealOmit
    ingredient?: IngredientOmit
    mealIngredient?: MealIngredientOmit
    mealSchedule?: MealScheduleOmit
    comment?: CommentOmit
    rating?: RatingOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type MealCountOutputType
   */

  export type MealCountOutputType = {
    ingredients: number
    schedules: number
    comments: number
    ratings: number
  }

  export type MealCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ingredients?: boolean | MealCountOutputTypeCountIngredientsArgs
    schedules?: boolean | MealCountOutputTypeCountSchedulesArgs
    comments?: boolean | MealCountOutputTypeCountCommentsArgs
    ratings?: boolean | MealCountOutputTypeCountRatingsArgs
  }

  // Custom InputTypes
  /**
   * MealCountOutputType without action
   */
  export type MealCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealCountOutputType
     */
    select?: MealCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MealCountOutputType without action
   */
  export type MealCountOutputTypeCountIngredientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MealIngredientWhereInput
  }

  /**
   * MealCountOutputType without action
   */
  export type MealCountOutputTypeCountSchedulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MealScheduleWhereInput
  }

  /**
   * MealCountOutputType without action
   */
  export type MealCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
  }

  /**
   * MealCountOutputType without action
   */
  export type MealCountOutputTypeCountRatingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RatingWhereInput
  }


  /**
   * Count Type IngredientCountOutputType
   */

  export type IngredientCountOutputType = {
    meals: number
  }

  export type IngredientCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meals?: boolean | IngredientCountOutputTypeCountMealsArgs
  }

  // Custom InputTypes
  /**
   * IngredientCountOutputType without action
   */
  export type IngredientCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IngredientCountOutputType
     */
    select?: IngredientCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * IngredientCountOutputType without action
   */
  export type IngredientCountOutputTypeCountMealsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MealIngredientWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Meal
   */

  export type AggregateMeal = {
    _count: MealCountAggregateOutputType | null
    _avg: MealAvgAggregateOutputType | null
    _sum: MealSumAggregateOutputType | null
    _min: MealMinAggregateOutputType | null
    _max: MealMaxAggregateOutputType | null
  }

  export type MealAvgAggregateOutputType = {
    id: number | null
  }

  export type MealSumAggregateOutputType = {
    id: number | null
  }

  export type MealMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    category: $Enums.Category | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MealMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    category: $Enums.Category | null
    image: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MealCountAggregateOutputType = {
    id: number
    name: number
    description: number
    category: number
    image: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MealAvgAggregateInputType = {
    id?: true
  }

  export type MealSumAggregateInputType = {
    id?: true
  }

  export type MealMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    category?: true
    image?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MealMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    category?: true
    image?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MealCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    category?: true
    image?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MealAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Meal to aggregate.
     */
    where?: MealWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Meals to fetch.
     */
    orderBy?: MealOrderByWithRelationInput | MealOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MealWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Meals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Meals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Meals
    **/
    _count?: true | MealCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MealAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MealSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MealMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MealMaxAggregateInputType
  }

  export type GetMealAggregateType<T extends MealAggregateArgs> = {
        [P in keyof T & keyof AggregateMeal]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMeal[P]>
      : GetScalarType<T[P], AggregateMeal[P]>
  }




  export type MealGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MealWhereInput
    orderBy?: MealOrderByWithAggregationInput | MealOrderByWithAggregationInput[]
    by: MealScalarFieldEnum[] | MealScalarFieldEnum
    having?: MealScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MealCountAggregateInputType | true
    _avg?: MealAvgAggregateInputType
    _sum?: MealSumAggregateInputType
    _min?: MealMinAggregateInputType
    _max?: MealMaxAggregateInputType
  }

  export type MealGroupByOutputType = {
    id: number
    name: string
    description: string | null
    category: $Enums.Category
    image: string | null
    createdAt: Date
    updatedAt: Date
    _count: MealCountAggregateOutputType | null
    _avg: MealAvgAggregateOutputType | null
    _sum: MealSumAggregateOutputType | null
    _min: MealMinAggregateOutputType | null
    _max: MealMaxAggregateOutputType | null
  }

  type GetMealGroupByPayload<T extends MealGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MealGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MealGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MealGroupByOutputType[P]>
            : GetScalarType<T[P], MealGroupByOutputType[P]>
        }
      >
    >


  export type MealSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    category?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    ingredients?: boolean | Meal$ingredientsArgs<ExtArgs>
    schedules?: boolean | Meal$schedulesArgs<ExtArgs>
    comments?: boolean | Meal$commentsArgs<ExtArgs>
    ratings?: boolean | Meal$ratingsArgs<ExtArgs>
    _count?: boolean | MealCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["meal"]>

  export type MealSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    category?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["meal"]>

  export type MealSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    category?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["meal"]>

  export type MealSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    category?: boolean
    image?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MealOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "category" | "image" | "createdAt" | "updatedAt", ExtArgs["result"]["meal"]>
  export type MealInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ingredients?: boolean | Meal$ingredientsArgs<ExtArgs>
    schedules?: boolean | Meal$schedulesArgs<ExtArgs>
    comments?: boolean | Meal$commentsArgs<ExtArgs>
    ratings?: boolean | Meal$ratingsArgs<ExtArgs>
    _count?: boolean | MealCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MealIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type MealIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MealPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Meal"
    objects: {
      ingredients: Prisma.$MealIngredientPayload<ExtArgs>[]
      schedules: Prisma.$MealSchedulePayload<ExtArgs>[]
      comments: Prisma.$CommentPayload<ExtArgs>[]
      ratings: Prisma.$RatingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string | null
      category: $Enums.Category
      image: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["meal"]>
    composites: {}
  }

  type MealGetPayload<S extends boolean | null | undefined | MealDefaultArgs> = $Result.GetResult<Prisma.$MealPayload, S>

  type MealCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MealFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MealCountAggregateInputType | true
    }

  export interface MealDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Meal'], meta: { name: 'Meal' } }
    /**
     * Find zero or one Meal that matches the filter.
     * @param {MealFindUniqueArgs} args - Arguments to find a Meal
     * @example
     * // Get one Meal
     * const meal = await prisma.meal.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MealFindUniqueArgs>(args: SelectSubset<T, MealFindUniqueArgs<ExtArgs>>): Prisma__MealClient<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Meal that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MealFindUniqueOrThrowArgs} args - Arguments to find a Meal
     * @example
     * // Get one Meal
     * const meal = await prisma.meal.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MealFindUniqueOrThrowArgs>(args: SelectSubset<T, MealFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MealClient<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Meal that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealFindFirstArgs} args - Arguments to find a Meal
     * @example
     * // Get one Meal
     * const meal = await prisma.meal.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MealFindFirstArgs>(args?: SelectSubset<T, MealFindFirstArgs<ExtArgs>>): Prisma__MealClient<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Meal that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealFindFirstOrThrowArgs} args - Arguments to find a Meal
     * @example
     * // Get one Meal
     * const meal = await prisma.meal.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MealFindFirstOrThrowArgs>(args?: SelectSubset<T, MealFindFirstOrThrowArgs<ExtArgs>>): Prisma__MealClient<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Meals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Meals
     * const meals = await prisma.meal.findMany()
     * 
     * // Get first 10 Meals
     * const meals = await prisma.meal.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mealWithIdOnly = await prisma.meal.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MealFindManyArgs>(args?: SelectSubset<T, MealFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Meal.
     * @param {MealCreateArgs} args - Arguments to create a Meal.
     * @example
     * // Create one Meal
     * const Meal = await prisma.meal.create({
     *   data: {
     *     // ... data to create a Meal
     *   }
     * })
     * 
     */
    create<T extends MealCreateArgs>(args: SelectSubset<T, MealCreateArgs<ExtArgs>>): Prisma__MealClient<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Meals.
     * @param {MealCreateManyArgs} args - Arguments to create many Meals.
     * @example
     * // Create many Meals
     * const meal = await prisma.meal.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MealCreateManyArgs>(args?: SelectSubset<T, MealCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Meals and returns the data saved in the database.
     * @param {MealCreateManyAndReturnArgs} args - Arguments to create many Meals.
     * @example
     * // Create many Meals
     * const meal = await prisma.meal.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Meals and only return the `id`
     * const mealWithIdOnly = await prisma.meal.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MealCreateManyAndReturnArgs>(args?: SelectSubset<T, MealCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Meal.
     * @param {MealDeleteArgs} args - Arguments to delete one Meal.
     * @example
     * // Delete one Meal
     * const Meal = await prisma.meal.delete({
     *   where: {
     *     // ... filter to delete one Meal
     *   }
     * })
     * 
     */
    delete<T extends MealDeleteArgs>(args: SelectSubset<T, MealDeleteArgs<ExtArgs>>): Prisma__MealClient<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Meal.
     * @param {MealUpdateArgs} args - Arguments to update one Meal.
     * @example
     * // Update one Meal
     * const meal = await prisma.meal.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MealUpdateArgs>(args: SelectSubset<T, MealUpdateArgs<ExtArgs>>): Prisma__MealClient<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Meals.
     * @param {MealDeleteManyArgs} args - Arguments to filter Meals to delete.
     * @example
     * // Delete a few Meals
     * const { count } = await prisma.meal.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MealDeleteManyArgs>(args?: SelectSubset<T, MealDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Meals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Meals
     * const meal = await prisma.meal.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MealUpdateManyArgs>(args: SelectSubset<T, MealUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Meals and returns the data updated in the database.
     * @param {MealUpdateManyAndReturnArgs} args - Arguments to update many Meals.
     * @example
     * // Update many Meals
     * const meal = await prisma.meal.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Meals and only return the `id`
     * const mealWithIdOnly = await prisma.meal.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MealUpdateManyAndReturnArgs>(args: SelectSubset<T, MealUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Meal.
     * @param {MealUpsertArgs} args - Arguments to update or create a Meal.
     * @example
     * // Update or create a Meal
     * const meal = await prisma.meal.upsert({
     *   create: {
     *     // ... data to create a Meal
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Meal we want to update
     *   }
     * })
     */
    upsert<T extends MealUpsertArgs>(args: SelectSubset<T, MealUpsertArgs<ExtArgs>>): Prisma__MealClient<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Meals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealCountArgs} args - Arguments to filter Meals to count.
     * @example
     * // Count the number of Meals
     * const count = await prisma.meal.count({
     *   where: {
     *     // ... the filter for the Meals we want to count
     *   }
     * })
    **/
    count<T extends MealCountArgs>(
      args?: Subset<T, MealCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MealCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Meal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MealAggregateArgs>(args: Subset<T, MealAggregateArgs>): Prisma.PrismaPromise<GetMealAggregateType<T>>

    /**
     * Group by Meal.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealGroupByArgs} args - Group by arguments.
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
      T extends MealGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MealGroupByArgs['orderBy'] }
        : { orderBy?: MealGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
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
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MealGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMealGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Meal model
   */
  readonly fields: MealFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Meal.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MealClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ingredients<T extends Meal$ingredientsArgs<ExtArgs> = {}>(args?: Subset<T, Meal$ingredientsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MealIngredientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    schedules<T extends Meal$schedulesArgs<ExtArgs> = {}>(args?: Subset<T, Meal$schedulesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MealSchedulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    comments<T extends Meal$commentsArgs<ExtArgs> = {}>(args?: Subset<T, Meal$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ratings<T extends Meal$ratingsArgs<ExtArgs> = {}>(args?: Subset<T, Meal$ratingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Meal model
   */
  interface MealFieldRefs {
    readonly id: FieldRef<"Meal", 'Int'>
    readonly name: FieldRef<"Meal", 'String'>
    readonly description: FieldRef<"Meal", 'String'>
    readonly category: FieldRef<"Meal", 'Category'>
    readonly image: FieldRef<"Meal", 'String'>
    readonly createdAt: FieldRef<"Meal", 'DateTime'>
    readonly updatedAt: FieldRef<"Meal", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Meal findUnique
   */
  export type MealFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meal
     */
    omit?: MealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealInclude<ExtArgs> | null
    /**
     * Filter, which Meal to fetch.
     */
    where: MealWhereUniqueInput
  }

  /**
   * Meal findUniqueOrThrow
   */
  export type MealFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meal
     */
    omit?: MealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealInclude<ExtArgs> | null
    /**
     * Filter, which Meal to fetch.
     */
    where: MealWhereUniqueInput
  }

  /**
   * Meal findFirst
   */
  export type MealFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meal
     */
    omit?: MealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealInclude<ExtArgs> | null
    /**
     * Filter, which Meal to fetch.
     */
    where?: MealWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Meals to fetch.
     */
    orderBy?: MealOrderByWithRelationInput | MealOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Meals.
     */
    cursor?: MealWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Meals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Meals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Meals.
     */
    distinct?: MealScalarFieldEnum | MealScalarFieldEnum[]
  }

  /**
   * Meal findFirstOrThrow
   */
  export type MealFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meal
     */
    omit?: MealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealInclude<ExtArgs> | null
    /**
     * Filter, which Meal to fetch.
     */
    where?: MealWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Meals to fetch.
     */
    orderBy?: MealOrderByWithRelationInput | MealOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Meals.
     */
    cursor?: MealWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Meals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Meals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Meals.
     */
    distinct?: MealScalarFieldEnum | MealScalarFieldEnum[]
  }

  /**
   * Meal findMany
   */
  export type MealFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meal
     */
    omit?: MealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealInclude<ExtArgs> | null
    /**
     * Filter, which Meals to fetch.
     */
    where?: MealWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Meals to fetch.
     */
    orderBy?: MealOrderByWithRelationInput | MealOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Meals.
     */
    cursor?: MealWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Meals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Meals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Meals.
     */
    distinct?: MealScalarFieldEnum | MealScalarFieldEnum[]
  }

  /**
   * Meal create
   */
  export type MealCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meal
     */
    omit?: MealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealInclude<ExtArgs> | null
    /**
     * The data needed to create a Meal.
     */
    data: XOR<MealCreateInput, MealUncheckedCreateInput>
  }

  /**
   * Meal createMany
   */
  export type MealCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Meals.
     */
    data: MealCreateManyInput | MealCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Meal createManyAndReturn
   */
  export type MealCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Meal
     */
    omit?: MealOmit<ExtArgs> | null
    /**
     * The data used to create many Meals.
     */
    data: MealCreateManyInput | MealCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Meal update
   */
  export type MealUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meal
     */
    omit?: MealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealInclude<ExtArgs> | null
    /**
     * The data needed to update a Meal.
     */
    data: XOR<MealUpdateInput, MealUncheckedUpdateInput>
    /**
     * Choose, which Meal to update.
     */
    where: MealWhereUniqueInput
  }

  /**
   * Meal updateMany
   */
  export type MealUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Meals.
     */
    data: XOR<MealUpdateManyMutationInput, MealUncheckedUpdateManyInput>
    /**
     * Filter which Meals to update
     */
    where?: MealWhereInput
    /**
     * Limit how many Meals to update.
     */
    limit?: number
  }

  /**
   * Meal updateManyAndReturn
   */
  export type MealUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Meal
     */
    omit?: MealOmit<ExtArgs> | null
    /**
     * The data used to update Meals.
     */
    data: XOR<MealUpdateManyMutationInput, MealUncheckedUpdateManyInput>
    /**
     * Filter which Meals to update
     */
    where?: MealWhereInput
    /**
     * Limit how many Meals to update.
     */
    limit?: number
  }

  /**
   * Meal upsert
   */
  export type MealUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meal
     */
    omit?: MealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealInclude<ExtArgs> | null
    /**
     * The filter to search for the Meal to update in case it exists.
     */
    where: MealWhereUniqueInput
    /**
     * In case the Meal found by the `where` argument doesn't exist, create a new Meal with this data.
     */
    create: XOR<MealCreateInput, MealUncheckedCreateInput>
    /**
     * In case the Meal was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MealUpdateInput, MealUncheckedUpdateInput>
  }

  /**
   * Meal delete
   */
  export type MealDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meal
     */
    omit?: MealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealInclude<ExtArgs> | null
    /**
     * Filter which Meal to delete.
     */
    where: MealWhereUniqueInput
  }

  /**
   * Meal deleteMany
   */
  export type MealDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Meals to delete
     */
    where?: MealWhereInput
    /**
     * Limit how many Meals to delete.
     */
    limit?: number
  }

  /**
   * Meal.ingredients
   */
  export type Meal$ingredientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealIngredient
     */
    select?: MealIngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealIngredient
     */
    omit?: MealIngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealIngredientInclude<ExtArgs> | null
    where?: MealIngredientWhereInput
    orderBy?: MealIngredientOrderByWithRelationInput | MealIngredientOrderByWithRelationInput[]
    cursor?: MealIngredientWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MealIngredientScalarFieldEnum | MealIngredientScalarFieldEnum[]
  }

  /**
   * Meal.schedules
   */
  export type Meal$schedulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealSchedule
     */
    select?: MealScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealSchedule
     */
    omit?: MealScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealScheduleInclude<ExtArgs> | null
    where?: MealScheduleWhereInput
    orderBy?: MealScheduleOrderByWithRelationInput | MealScheduleOrderByWithRelationInput[]
    cursor?: MealScheduleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MealScheduleScalarFieldEnum | MealScheduleScalarFieldEnum[]
  }

  /**
   * Meal.comments
   */
  export type Meal$commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    cursor?: CommentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Meal.ratings
   */
  export type Meal$ratingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    where?: RatingWhereInput
    orderBy?: RatingOrderByWithRelationInput | RatingOrderByWithRelationInput[]
    cursor?: RatingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RatingScalarFieldEnum | RatingScalarFieldEnum[]
  }

  /**
   * Meal without action
   */
  export type MealDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meal
     */
    select?: MealSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meal
     */
    omit?: MealOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealInclude<ExtArgs> | null
  }


  /**
   * Model Ingredient
   */

  export type AggregateIngredient = {
    _count: IngredientCountAggregateOutputType | null
    _avg: IngredientAvgAggregateOutputType | null
    _sum: IngredientSumAggregateOutputType | null
    _min: IngredientMinAggregateOutputType | null
    _max: IngredientMaxAggregateOutputType | null
  }

  export type IngredientAvgAggregateOutputType = {
    id: number | null
  }

  export type IngredientSumAggregateOutputType = {
    id: number | null
  }

  export type IngredientMinAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
  }

  export type IngredientMaxAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
  }

  export type IngredientCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    _all: number
  }


  export type IngredientAvgAggregateInputType = {
    id?: true
  }

  export type IngredientSumAggregateInputType = {
    id?: true
  }

  export type IngredientMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
  }

  export type IngredientMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
  }

  export type IngredientCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    _all?: true
  }

  export type IngredientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ingredient to aggregate.
     */
    where?: IngredientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ingredients to fetch.
     */
    orderBy?: IngredientOrderByWithRelationInput | IngredientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IngredientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ingredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ingredients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Ingredients
    **/
    _count?: true | IngredientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: IngredientAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: IngredientSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IngredientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IngredientMaxAggregateInputType
  }

  export type GetIngredientAggregateType<T extends IngredientAggregateArgs> = {
        [P in keyof T & keyof AggregateIngredient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIngredient[P]>
      : GetScalarType<T[P], AggregateIngredient[P]>
  }




  export type IngredientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IngredientWhereInput
    orderBy?: IngredientOrderByWithAggregationInput | IngredientOrderByWithAggregationInput[]
    by: IngredientScalarFieldEnum[] | IngredientScalarFieldEnum
    having?: IngredientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IngredientCountAggregateInputType | true
    _avg?: IngredientAvgAggregateInputType
    _sum?: IngredientSumAggregateInputType
    _min?: IngredientMinAggregateInputType
    _max?: IngredientMaxAggregateInputType
  }

  export type IngredientGroupByOutputType = {
    id: number
    name: string
    createdAt: Date
    _count: IngredientCountAggregateOutputType | null
    _avg: IngredientAvgAggregateOutputType | null
    _sum: IngredientSumAggregateOutputType | null
    _min: IngredientMinAggregateOutputType | null
    _max: IngredientMaxAggregateOutputType | null
  }

  type GetIngredientGroupByPayload<T extends IngredientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IngredientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IngredientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IngredientGroupByOutputType[P]>
            : GetScalarType<T[P], IngredientGroupByOutputType[P]>
        }
      >
    >


  export type IngredientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    meals?: boolean | Ingredient$mealsArgs<ExtArgs>
    _count?: boolean | IngredientCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ingredient"]>

  export type IngredientSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["ingredient"]>

  export type IngredientSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["ingredient"]>

  export type IngredientSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
  }

  export type IngredientOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt", ExtArgs["result"]["ingredient"]>
  export type IngredientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meals?: boolean | Ingredient$mealsArgs<ExtArgs>
    _count?: boolean | IngredientCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type IngredientIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type IngredientIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $IngredientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ingredient"
    objects: {
      meals: Prisma.$MealIngredientPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      createdAt: Date
    }, ExtArgs["result"]["ingredient"]>
    composites: {}
  }

  type IngredientGetPayload<S extends boolean | null | undefined | IngredientDefaultArgs> = $Result.GetResult<Prisma.$IngredientPayload, S>

  type IngredientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<IngredientFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IngredientCountAggregateInputType | true
    }

  export interface IngredientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ingredient'], meta: { name: 'Ingredient' } }
    /**
     * Find zero or one Ingredient that matches the filter.
     * @param {IngredientFindUniqueArgs} args - Arguments to find a Ingredient
     * @example
     * // Get one Ingredient
     * const ingredient = await prisma.ingredient.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IngredientFindUniqueArgs>(args: SelectSubset<T, IngredientFindUniqueArgs<ExtArgs>>): Prisma__IngredientClient<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ingredient that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IngredientFindUniqueOrThrowArgs} args - Arguments to find a Ingredient
     * @example
     * // Get one Ingredient
     * const ingredient = await prisma.ingredient.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IngredientFindUniqueOrThrowArgs>(args: SelectSubset<T, IngredientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IngredientClient<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ingredient that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientFindFirstArgs} args - Arguments to find a Ingredient
     * @example
     * // Get one Ingredient
     * const ingredient = await prisma.ingredient.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IngredientFindFirstArgs>(args?: SelectSubset<T, IngredientFindFirstArgs<ExtArgs>>): Prisma__IngredientClient<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ingredient that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientFindFirstOrThrowArgs} args - Arguments to find a Ingredient
     * @example
     * // Get one Ingredient
     * const ingredient = await prisma.ingredient.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IngredientFindFirstOrThrowArgs>(args?: SelectSubset<T, IngredientFindFirstOrThrowArgs<ExtArgs>>): Prisma__IngredientClient<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ingredients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ingredients
     * const ingredients = await prisma.ingredient.findMany()
     * 
     * // Get first 10 Ingredients
     * const ingredients = await prisma.ingredient.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ingredientWithIdOnly = await prisma.ingredient.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IngredientFindManyArgs>(args?: SelectSubset<T, IngredientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ingredient.
     * @param {IngredientCreateArgs} args - Arguments to create a Ingredient.
     * @example
     * // Create one Ingredient
     * const Ingredient = await prisma.ingredient.create({
     *   data: {
     *     // ... data to create a Ingredient
     *   }
     * })
     * 
     */
    create<T extends IngredientCreateArgs>(args: SelectSubset<T, IngredientCreateArgs<ExtArgs>>): Prisma__IngredientClient<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ingredients.
     * @param {IngredientCreateManyArgs} args - Arguments to create many Ingredients.
     * @example
     * // Create many Ingredients
     * const ingredient = await prisma.ingredient.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IngredientCreateManyArgs>(args?: SelectSubset<T, IngredientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Ingredients and returns the data saved in the database.
     * @param {IngredientCreateManyAndReturnArgs} args - Arguments to create many Ingredients.
     * @example
     * // Create many Ingredients
     * const ingredient = await prisma.ingredient.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Ingredients and only return the `id`
     * const ingredientWithIdOnly = await prisma.ingredient.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends IngredientCreateManyAndReturnArgs>(args?: SelectSubset<T, IngredientCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Ingredient.
     * @param {IngredientDeleteArgs} args - Arguments to delete one Ingredient.
     * @example
     * // Delete one Ingredient
     * const Ingredient = await prisma.ingredient.delete({
     *   where: {
     *     // ... filter to delete one Ingredient
     *   }
     * })
     * 
     */
    delete<T extends IngredientDeleteArgs>(args: SelectSubset<T, IngredientDeleteArgs<ExtArgs>>): Prisma__IngredientClient<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ingredient.
     * @param {IngredientUpdateArgs} args - Arguments to update one Ingredient.
     * @example
     * // Update one Ingredient
     * const ingredient = await prisma.ingredient.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IngredientUpdateArgs>(args: SelectSubset<T, IngredientUpdateArgs<ExtArgs>>): Prisma__IngredientClient<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ingredients.
     * @param {IngredientDeleteManyArgs} args - Arguments to filter Ingredients to delete.
     * @example
     * // Delete a few Ingredients
     * const { count } = await prisma.ingredient.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IngredientDeleteManyArgs>(args?: SelectSubset<T, IngredientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ingredients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ingredients
     * const ingredient = await prisma.ingredient.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IngredientUpdateManyArgs>(args: SelectSubset<T, IngredientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ingredients and returns the data updated in the database.
     * @param {IngredientUpdateManyAndReturnArgs} args - Arguments to update many Ingredients.
     * @example
     * // Update many Ingredients
     * const ingredient = await prisma.ingredient.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Ingredients and only return the `id`
     * const ingredientWithIdOnly = await prisma.ingredient.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends IngredientUpdateManyAndReturnArgs>(args: SelectSubset<T, IngredientUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Ingredient.
     * @param {IngredientUpsertArgs} args - Arguments to update or create a Ingredient.
     * @example
     * // Update or create a Ingredient
     * const ingredient = await prisma.ingredient.upsert({
     *   create: {
     *     // ... data to create a Ingredient
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ingredient we want to update
     *   }
     * })
     */
    upsert<T extends IngredientUpsertArgs>(args: SelectSubset<T, IngredientUpsertArgs<ExtArgs>>): Prisma__IngredientClient<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ingredients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientCountArgs} args - Arguments to filter Ingredients to count.
     * @example
     * // Count the number of Ingredients
     * const count = await prisma.ingredient.count({
     *   where: {
     *     // ... the filter for the Ingredients we want to count
     *   }
     * })
    **/
    count<T extends IngredientCountArgs>(
      args?: Subset<T, IngredientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IngredientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ingredient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends IngredientAggregateArgs>(args: Subset<T, IngredientAggregateArgs>): Prisma.PrismaPromise<GetIngredientAggregateType<T>>

    /**
     * Group by Ingredient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IngredientGroupByArgs} args - Group by arguments.
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
      T extends IngredientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IngredientGroupByArgs['orderBy'] }
        : { orderBy?: IngredientGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
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
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, IngredientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIngredientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ingredient model
   */
  readonly fields: IngredientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ingredient.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IngredientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    meals<T extends Ingredient$mealsArgs<ExtArgs> = {}>(args?: Subset<T, Ingredient$mealsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MealIngredientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Ingredient model
   */
  interface IngredientFieldRefs {
    readonly id: FieldRef<"Ingredient", 'Int'>
    readonly name: FieldRef<"Ingredient", 'String'>
    readonly createdAt: FieldRef<"Ingredient", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Ingredient findUnique
   */
  export type IngredientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInclude<ExtArgs> | null
    /**
     * Filter, which Ingredient to fetch.
     */
    where: IngredientWhereUniqueInput
  }

  /**
   * Ingredient findUniqueOrThrow
   */
  export type IngredientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInclude<ExtArgs> | null
    /**
     * Filter, which Ingredient to fetch.
     */
    where: IngredientWhereUniqueInput
  }

  /**
   * Ingredient findFirst
   */
  export type IngredientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInclude<ExtArgs> | null
    /**
     * Filter, which Ingredient to fetch.
     */
    where?: IngredientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ingredients to fetch.
     */
    orderBy?: IngredientOrderByWithRelationInput | IngredientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ingredients.
     */
    cursor?: IngredientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ingredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ingredients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ingredients.
     */
    distinct?: IngredientScalarFieldEnum | IngredientScalarFieldEnum[]
  }

  /**
   * Ingredient findFirstOrThrow
   */
  export type IngredientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInclude<ExtArgs> | null
    /**
     * Filter, which Ingredient to fetch.
     */
    where?: IngredientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ingredients to fetch.
     */
    orderBy?: IngredientOrderByWithRelationInput | IngredientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ingredients.
     */
    cursor?: IngredientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ingredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ingredients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ingredients.
     */
    distinct?: IngredientScalarFieldEnum | IngredientScalarFieldEnum[]
  }

  /**
   * Ingredient findMany
   */
  export type IngredientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInclude<ExtArgs> | null
    /**
     * Filter, which Ingredients to fetch.
     */
    where?: IngredientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ingredients to fetch.
     */
    orderBy?: IngredientOrderByWithRelationInput | IngredientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Ingredients.
     */
    cursor?: IngredientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ingredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ingredients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ingredients.
     */
    distinct?: IngredientScalarFieldEnum | IngredientScalarFieldEnum[]
  }

  /**
   * Ingredient create
   */
  export type IngredientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInclude<ExtArgs> | null
    /**
     * The data needed to create a Ingredient.
     */
    data: XOR<IngredientCreateInput, IngredientUncheckedCreateInput>
  }

  /**
   * Ingredient createMany
   */
  export type IngredientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Ingredients.
     */
    data: IngredientCreateManyInput | IngredientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ingredient createManyAndReturn
   */
  export type IngredientCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * The data used to create many Ingredients.
     */
    data: IngredientCreateManyInput | IngredientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ingredient update
   */
  export type IngredientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInclude<ExtArgs> | null
    /**
     * The data needed to update a Ingredient.
     */
    data: XOR<IngredientUpdateInput, IngredientUncheckedUpdateInput>
    /**
     * Choose, which Ingredient to update.
     */
    where: IngredientWhereUniqueInput
  }

  /**
   * Ingredient updateMany
   */
  export type IngredientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Ingredients.
     */
    data: XOR<IngredientUpdateManyMutationInput, IngredientUncheckedUpdateManyInput>
    /**
     * Filter which Ingredients to update
     */
    where?: IngredientWhereInput
    /**
     * Limit how many Ingredients to update.
     */
    limit?: number
  }

  /**
   * Ingredient updateManyAndReturn
   */
  export type IngredientUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * The data used to update Ingredients.
     */
    data: XOR<IngredientUpdateManyMutationInput, IngredientUncheckedUpdateManyInput>
    /**
     * Filter which Ingredients to update
     */
    where?: IngredientWhereInput
    /**
     * Limit how many Ingredients to update.
     */
    limit?: number
  }

  /**
   * Ingredient upsert
   */
  export type IngredientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInclude<ExtArgs> | null
    /**
     * The filter to search for the Ingredient to update in case it exists.
     */
    where: IngredientWhereUniqueInput
    /**
     * In case the Ingredient found by the `where` argument doesn't exist, create a new Ingredient with this data.
     */
    create: XOR<IngredientCreateInput, IngredientUncheckedCreateInput>
    /**
     * In case the Ingredient was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IngredientUpdateInput, IngredientUncheckedUpdateInput>
  }

  /**
   * Ingredient delete
   */
  export type IngredientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInclude<ExtArgs> | null
    /**
     * Filter which Ingredient to delete.
     */
    where: IngredientWhereUniqueInput
  }

  /**
   * Ingredient deleteMany
   */
  export type IngredientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ingredients to delete
     */
    where?: IngredientWhereInput
    /**
     * Limit how many Ingredients to delete.
     */
    limit?: number
  }

  /**
   * Ingredient.meals
   */
  export type Ingredient$mealsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealIngredient
     */
    select?: MealIngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealIngredient
     */
    omit?: MealIngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealIngredientInclude<ExtArgs> | null
    where?: MealIngredientWhereInput
    orderBy?: MealIngredientOrderByWithRelationInput | MealIngredientOrderByWithRelationInput[]
    cursor?: MealIngredientWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MealIngredientScalarFieldEnum | MealIngredientScalarFieldEnum[]
  }

  /**
   * Ingredient without action
   */
  export type IngredientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ingredient
     */
    select?: IngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ingredient
     */
    omit?: IngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IngredientInclude<ExtArgs> | null
  }


  /**
   * Model MealIngredient
   */

  export type AggregateMealIngredient = {
    _count: MealIngredientCountAggregateOutputType | null
    _avg: MealIngredientAvgAggregateOutputType | null
    _sum: MealIngredientSumAggregateOutputType | null
    _min: MealIngredientMinAggregateOutputType | null
    _max: MealIngredientMaxAggregateOutputType | null
  }

  export type MealIngredientAvgAggregateOutputType = {
    mealId: number | null
    ingredientId: number | null
    quantity: Decimal | null
  }

  export type MealIngredientSumAggregateOutputType = {
    mealId: number | null
    ingredientId: number | null
    quantity: Decimal | null
  }

  export type MealIngredientMinAggregateOutputType = {
    mealId: number | null
    ingredientId: number | null
    quantity: Decimal | null
    unit: string | null
  }

  export type MealIngredientMaxAggregateOutputType = {
    mealId: number | null
    ingredientId: number | null
    quantity: Decimal | null
    unit: string | null
  }

  export type MealIngredientCountAggregateOutputType = {
    mealId: number
    ingredientId: number
    quantity: number
    unit: number
    _all: number
  }


  export type MealIngredientAvgAggregateInputType = {
    mealId?: true
    ingredientId?: true
    quantity?: true
  }

  export type MealIngredientSumAggregateInputType = {
    mealId?: true
    ingredientId?: true
    quantity?: true
  }

  export type MealIngredientMinAggregateInputType = {
    mealId?: true
    ingredientId?: true
    quantity?: true
    unit?: true
  }

  export type MealIngredientMaxAggregateInputType = {
    mealId?: true
    ingredientId?: true
    quantity?: true
    unit?: true
  }

  export type MealIngredientCountAggregateInputType = {
    mealId?: true
    ingredientId?: true
    quantity?: true
    unit?: true
    _all?: true
  }

  export type MealIngredientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MealIngredient to aggregate.
     */
    where?: MealIngredientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MealIngredients to fetch.
     */
    orderBy?: MealIngredientOrderByWithRelationInput | MealIngredientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MealIngredientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MealIngredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MealIngredients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MealIngredients
    **/
    _count?: true | MealIngredientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MealIngredientAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MealIngredientSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MealIngredientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MealIngredientMaxAggregateInputType
  }

  export type GetMealIngredientAggregateType<T extends MealIngredientAggregateArgs> = {
        [P in keyof T & keyof AggregateMealIngredient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMealIngredient[P]>
      : GetScalarType<T[P], AggregateMealIngredient[P]>
  }




  export type MealIngredientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MealIngredientWhereInput
    orderBy?: MealIngredientOrderByWithAggregationInput | MealIngredientOrderByWithAggregationInput[]
    by: MealIngredientScalarFieldEnum[] | MealIngredientScalarFieldEnum
    having?: MealIngredientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MealIngredientCountAggregateInputType | true
    _avg?: MealIngredientAvgAggregateInputType
    _sum?: MealIngredientSumAggregateInputType
    _min?: MealIngredientMinAggregateInputType
    _max?: MealIngredientMaxAggregateInputType
  }

  export type MealIngredientGroupByOutputType = {
    mealId: number
    ingredientId: number
    quantity: Decimal | null
    unit: string | null
    _count: MealIngredientCountAggregateOutputType | null
    _avg: MealIngredientAvgAggregateOutputType | null
    _sum: MealIngredientSumAggregateOutputType | null
    _min: MealIngredientMinAggregateOutputType | null
    _max: MealIngredientMaxAggregateOutputType | null
  }

  type GetMealIngredientGroupByPayload<T extends MealIngredientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MealIngredientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MealIngredientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MealIngredientGroupByOutputType[P]>
            : GetScalarType<T[P], MealIngredientGroupByOutputType[P]>
        }
      >
    >


  export type MealIngredientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    mealId?: boolean
    ingredientId?: boolean
    quantity?: boolean
    unit?: boolean
    meal?: boolean | MealDefaultArgs<ExtArgs>
    ingredient?: boolean | IngredientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mealIngredient"]>

  export type MealIngredientSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    mealId?: boolean
    ingredientId?: boolean
    quantity?: boolean
    unit?: boolean
    meal?: boolean | MealDefaultArgs<ExtArgs>
    ingredient?: boolean | IngredientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mealIngredient"]>

  export type MealIngredientSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    mealId?: boolean
    ingredientId?: boolean
    quantity?: boolean
    unit?: boolean
    meal?: boolean | MealDefaultArgs<ExtArgs>
    ingredient?: boolean | IngredientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mealIngredient"]>

  export type MealIngredientSelectScalar = {
    mealId?: boolean
    ingredientId?: boolean
    quantity?: boolean
    unit?: boolean
  }

  export type MealIngredientOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"mealId" | "ingredientId" | "quantity" | "unit", ExtArgs["result"]["mealIngredient"]>
  export type MealIngredientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meal?: boolean | MealDefaultArgs<ExtArgs>
    ingredient?: boolean | IngredientDefaultArgs<ExtArgs>
  }
  export type MealIngredientIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meal?: boolean | MealDefaultArgs<ExtArgs>
    ingredient?: boolean | IngredientDefaultArgs<ExtArgs>
  }
  export type MealIngredientIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meal?: boolean | MealDefaultArgs<ExtArgs>
    ingredient?: boolean | IngredientDefaultArgs<ExtArgs>
  }

  export type $MealIngredientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MealIngredient"
    objects: {
      meal: Prisma.$MealPayload<ExtArgs>
      ingredient: Prisma.$IngredientPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      mealId: number
      ingredientId: number
      quantity: Prisma.Decimal | null
      unit: string | null
    }, ExtArgs["result"]["mealIngredient"]>
    composites: {}
  }

  type MealIngredientGetPayload<S extends boolean | null | undefined | MealIngredientDefaultArgs> = $Result.GetResult<Prisma.$MealIngredientPayload, S>

  type MealIngredientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MealIngredientFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MealIngredientCountAggregateInputType | true
    }

  export interface MealIngredientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MealIngredient'], meta: { name: 'MealIngredient' } }
    /**
     * Find zero or one MealIngredient that matches the filter.
     * @param {MealIngredientFindUniqueArgs} args - Arguments to find a MealIngredient
     * @example
     * // Get one MealIngredient
     * const mealIngredient = await prisma.mealIngredient.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MealIngredientFindUniqueArgs>(args: SelectSubset<T, MealIngredientFindUniqueArgs<ExtArgs>>): Prisma__MealIngredientClient<$Result.GetResult<Prisma.$MealIngredientPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MealIngredient that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MealIngredientFindUniqueOrThrowArgs} args - Arguments to find a MealIngredient
     * @example
     * // Get one MealIngredient
     * const mealIngredient = await prisma.mealIngredient.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MealIngredientFindUniqueOrThrowArgs>(args: SelectSubset<T, MealIngredientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MealIngredientClient<$Result.GetResult<Prisma.$MealIngredientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MealIngredient that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealIngredientFindFirstArgs} args - Arguments to find a MealIngredient
     * @example
     * // Get one MealIngredient
     * const mealIngredient = await prisma.mealIngredient.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MealIngredientFindFirstArgs>(args?: SelectSubset<T, MealIngredientFindFirstArgs<ExtArgs>>): Prisma__MealIngredientClient<$Result.GetResult<Prisma.$MealIngredientPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MealIngredient that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealIngredientFindFirstOrThrowArgs} args - Arguments to find a MealIngredient
     * @example
     * // Get one MealIngredient
     * const mealIngredient = await prisma.mealIngredient.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MealIngredientFindFirstOrThrowArgs>(args?: SelectSubset<T, MealIngredientFindFirstOrThrowArgs<ExtArgs>>): Prisma__MealIngredientClient<$Result.GetResult<Prisma.$MealIngredientPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MealIngredients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealIngredientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MealIngredients
     * const mealIngredients = await prisma.mealIngredient.findMany()
     * 
     * // Get first 10 MealIngredients
     * const mealIngredients = await prisma.mealIngredient.findMany({ take: 10 })
     * 
     * // Only select the `mealId`
     * const mealIngredientWithMealIdOnly = await prisma.mealIngredient.findMany({ select: { mealId: true } })
     * 
     */
    findMany<T extends MealIngredientFindManyArgs>(args?: SelectSubset<T, MealIngredientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MealIngredientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MealIngredient.
     * @param {MealIngredientCreateArgs} args - Arguments to create a MealIngredient.
     * @example
     * // Create one MealIngredient
     * const MealIngredient = await prisma.mealIngredient.create({
     *   data: {
     *     // ... data to create a MealIngredient
     *   }
     * })
     * 
     */
    create<T extends MealIngredientCreateArgs>(args: SelectSubset<T, MealIngredientCreateArgs<ExtArgs>>): Prisma__MealIngredientClient<$Result.GetResult<Prisma.$MealIngredientPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MealIngredients.
     * @param {MealIngredientCreateManyArgs} args - Arguments to create many MealIngredients.
     * @example
     * // Create many MealIngredients
     * const mealIngredient = await prisma.mealIngredient.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MealIngredientCreateManyArgs>(args?: SelectSubset<T, MealIngredientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MealIngredients and returns the data saved in the database.
     * @param {MealIngredientCreateManyAndReturnArgs} args - Arguments to create many MealIngredients.
     * @example
     * // Create many MealIngredients
     * const mealIngredient = await prisma.mealIngredient.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MealIngredients and only return the `mealId`
     * const mealIngredientWithMealIdOnly = await prisma.mealIngredient.createManyAndReturn({
     *   select: { mealId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MealIngredientCreateManyAndReturnArgs>(args?: SelectSubset<T, MealIngredientCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MealIngredientPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MealIngredient.
     * @param {MealIngredientDeleteArgs} args - Arguments to delete one MealIngredient.
     * @example
     * // Delete one MealIngredient
     * const MealIngredient = await prisma.mealIngredient.delete({
     *   where: {
     *     // ... filter to delete one MealIngredient
     *   }
     * })
     * 
     */
    delete<T extends MealIngredientDeleteArgs>(args: SelectSubset<T, MealIngredientDeleteArgs<ExtArgs>>): Prisma__MealIngredientClient<$Result.GetResult<Prisma.$MealIngredientPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MealIngredient.
     * @param {MealIngredientUpdateArgs} args - Arguments to update one MealIngredient.
     * @example
     * // Update one MealIngredient
     * const mealIngredient = await prisma.mealIngredient.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MealIngredientUpdateArgs>(args: SelectSubset<T, MealIngredientUpdateArgs<ExtArgs>>): Prisma__MealIngredientClient<$Result.GetResult<Prisma.$MealIngredientPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MealIngredients.
     * @param {MealIngredientDeleteManyArgs} args - Arguments to filter MealIngredients to delete.
     * @example
     * // Delete a few MealIngredients
     * const { count } = await prisma.mealIngredient.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MealIngredientDeleteManyArgs>(args?: SelectSubset<T, MealIngredientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MealIngredients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealIngredientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MealIngredients
     * const mealIngredient = await prisma.mealIngredient.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MealIngredientUpdateManyArgs>(args: SelectSubset<T, MealIngredientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MealIngredients and returns the data updated in the database.
     * @param {MealIngredientUpdateManyAndReturnArgs} args - Arguments to update many MealIngredients.
     * @example
     * // Update many MealIngredients
     * const mealIngredient = await prisma.mealIngredient.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MealIngredients and only return the `mealId`
     * const mealIngredientWithMealIdOnly = await prisma.mealIngredient.updateManyAndReturn({
     *   select: { mealId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MealIngredientUpdateManyAndReturnArgs>(args: SelectSubset<T, MealIngredientUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MealIngredientPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MealIngredient.
     * @param {MealIngredientUpsertArgs} args - Arguments to update or create a MealIngredient.
     * @example
     * // Update or create a MealIngredient
     * const mealIngredient = await prisma.mealIngredient.upsert({
     *   create: {
     *     // ... data to create a MealIngredient
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MealIngredient we want to update
     *   }
     * })
     */
    upsert<T extends MealIngredientUpsertArgs>(args: SelectSubset<T, MealIngredientUpsertArgs<ExtArgs>>): Prisma__MealIngredientClient<$Result.GetResult<Prisma.$MealIngredientPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MealIngredients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealIngredientCountArgs} args - Arguments to filter MealIngredients to count.
     * @example
     * // Count the number of MealIngredients
     * const count = await prisma.mealIngredient.count({
     *   where: {
     *     // ... the filter for the MealIngredients we want to count
     *   }
     * })
    **/
    count<T extends MealIngredientCountArgs>(
      args?: Subset<T, MealIngredientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MealIngredientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MealIngredient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealIngredientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MealIngredientAggregateArgs>(args: Subset<T, MealIngredientAggregateArgs>): Prisma.PrismaPromise<GetMealIngredientAggregateType<T>>

    /**
     * Group by MealIngredient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealIngredientGroupByArgs} args - Group by arguments.
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
      T extends MealIngredientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MealIngredientGroupByArgs['orderBy'] }
        : { orderBy?: MealIngredientGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
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
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MealIngredientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMealIngredientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MealIngredient model
   */
  readonly fields: MealIngredientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MealIngredient.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MealIngredientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    meal<T extends MealDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MealDefaultArgs<ExtArgs>>): Prisma__MealClient<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ingredient<T extends IngredientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, IngredientDefaultArgs<ExtArgs>>): Prisma__IngredientClient<$Result.GetResult<Prisma.$IngredientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MealIngredient model
   */
  interface MealIngredientFieldRefs {
    readonly mealId: FieldRef<"MealIngredient", 'Int'>
    readonly ingredientId: FieldRef<"MealIngredient", 'Int'>
    readonly quantity: FieldRef<"MealIngredient", 'Decimal'>
    readonly unit: FieldRef<"MealIngredient", 'String'>
  }
    

  // Custom InputTypes
  /**
   * MealIngredient findUnique
   */
  export type MealIngredientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealIngredient
     */
    select?: MealIngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealIngredient
     */
    omit?: MealIngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealIngredientInclude<ExtArgs> | null
    /**
     * Filter, which MealIngredient to fetch.
     */
    where: MealIngredientWhereUniqueInput
  }

  /**
   * MealIngredient findUniqueOrThrow
   */
  export type MealIngredientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealIngredient
     */
    select?: MealIngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealIngredient
     */
    omit?: MealIngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealIngredientInclude<ExtArgs> | null
    /**
     * Filter, which MealIngredient to fetch.
     */
    where: MealIngredientWhereUniqueInput
  }

  /**
   * MealIngredient findFirst
   */
  export type MealIngredientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealIngredient
     */
    select?: MealIngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealIngredient
     */
    omit?: MealIngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealIngredientInclude<ExtArgs> | null
    /**
     * Filter, which MealIngredient to fetch.
     */
    where?: MealIngredientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MealIngredients to fetch.
     */
    orderBy?: MealIngredientOrderByWithRelationInput | MealIngredientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MealIngredients.
     */
    cursor?: MealIngredientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MealIngredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MealIngredients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MealIngredients.
     */
    distinct?: MealIngredientScalarFieldEnum | MealIngredientScalarFieldEnum[]
  }

  /**
   * MealIngredient findFirstOrThrow
   */
  export type MealIngredientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealIngredient
     */
    select?: MealIngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealIngredient
     */
    omit?: MealIngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealIngredientInclude<ExtArgs> | null
    /**
     * Filter, which MealIngredient to fetch.
     */
    where?: MealIngredientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MealIngredients to fetch.
     */
    orderBy?: MealIngredientOrderByWithRelationInput | MealIngredientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MealIngredients.
     */
    cursor?: MealIngredientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MealIngredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MealIngredients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MealIngredients.
     */
    distinct?: MealIngredientScalarFieldEnum | MealIngredientScalarFieldEnum[]
  }

  /**
   * MealIngredient findMany
   */
  export type MealIngredientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealIngredient
     */
    select?: MealIngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealIngredient
     */
    omit?: MealIngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealIngredientInclude<ExtArgs> | null
    /**
     * Filter, which MealIngredients to fetch.
     */
    where?: MealIngredientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MealIngredients to fetch.
     */
    orderBy?: MealIngredientOrderByWithRelationInput | MealIngredientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MealIngredients.
     */
    cursor?: MealIngredientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MealIngredients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MealIngredients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MealIngredients.
     */
    distinct?: MealIngredientScalarFieldEnum | MealIngredientScalarFieldEnum[]
  }

  /**
   * MealIngredient create
   */
  export type MealIngredientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealIngredient
     */
    select?: MealIngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealIngredient
     */
    omit?: MealIngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealIngredientInclude<ExtArgs> | null
    /**
     * The data needed to create a MealIngredient.
     */
    data: XOR<MealIngredientCreateInput, MealIngredientUncheckedCreateInput>
  }

  /**
   * MealIngredient createMany
   */
  export type MealIngredientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MealIngredients.
     */
    data: MealIngredientCreateManyInput | MealIngredientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MealIngredient createManyAndReturn
   */
  export type MealIngredientCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealIngredient
     */
    select?: MealIngredientSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MealIngredient
     */
    omit?: MealIngredientOmit<ExtArgs> | null
    /**
     * The data used to create many MealIngredients.
     */
    data: MealIngredientCreateManyInput | MealIngredientCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealIngredientIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MealIngredient update
   */
  export type MealIngredientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealIngredient
     */
    select?: MealIngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealIngredient
     */
    omit?: MealIngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealIngredientInclude<ExtArgs> | null
    /**
     * The data needed to update a MealIngredient.
     */
    data: XOR<MealIngredientUpdateInput, MealIngredientUncheckedUpdateInput>
    /**
     * Choose, which MealIngredient to update.
     */
    where: MealIngredientWhereUniqueInput
  }

  /**
   * MealIngredient updateMany
   */
  export type MealIngredientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MealIngredients.
     */
    data: XOR<MealIngredientUpdateManyMutationInput, MealIngredientUncheckedUpdateManyInput>
    /**
     * Filter which MealIngredients to update
     */
    where?: MealIngredientWhereInput
    /**
     * Limit how many MealIngredients to update.
     */
    limit?: number
  }

  /**
   * MealIngredient updateManyAndReturn
   */
  export type MealIngredientUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealIngredient
     */
    select?: MealIngredientSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MealIngredient
     */
    omit?: MealIngredientOmit<ExtArgs> | null
    /**
     * The data used to update MealIngredients.
     */
    data: XOR<MealIngredientUpdateManyMutationInput, MealIngredientUncheckedUpdateManyInput>
    /**
     * Filter which MealIngredients to update
     */
    where?: MealIngredientWhereInput
    /**
     * Limit how many MealIngredients to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealIngredientIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MealIngredient upsert
   */
  export type MealIngredientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealIngredient
     */
    select?: MealIngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealIngredient
     */
    omit?: MealIngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealIngredientInclude<ExtArgs> | null
    /**
     * The filter to search for the MealIngredient to update in case it exists.
     */
    where: MealIngredientWhereUniqueInput
    /**
     * In case the MealIngredient found by the `where` argument doesn't exist, create a new MealIngredient with this data.
     */
    create: XOR<MealIngredientCreateInput, MealIngredientUncheckedCreateInput>
    /**
     * In case the MealIngredient was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MealIngredientUpdateInput, MealIngredientUncheckedUpdateInput>
  }

  /**
   * MealIngredient delete
   */
  export type MealIngredientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealIngredient
     */
    select?: MealIngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealIngredient
     */
    omit?: MealIngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealIngredientInclude<ExtArgs> | null
    /**
     * Filter which MealIngredient to delete.
     */
    where: MealIngredientWhereUniqueInput
  }

  /**
   * MealIngredient deleteMany
   */
  export type MealIngredientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MealIngredients to delete
     */
    where?: MealIngredientWhereInput
    /**
     * Limit how many MealIngredients to delete.
     */
    limit?: number
  }

  /**
   * MealIngredient without action
   */
  export type MealIngredientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealIngredient
     */
    select?: MealIngredientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealIngredient
     */
    omit?: MealIngredientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealIngredientInclude<ExtArgs> | null
  }


  /**
   * Model MealSchedule
   */

  export type AggregateMealSchedule = {
    _count: MealScheduleCountAggregateOutputType | null
    _avg: MealScheduleAvgAggregateOutputType | null
    _sum: MealScheduleSumAggregateOutputType | null
    _min: MealScheduleMinAggregateOutputType | null
    _max: MealScheduleMaxAggregateOutputType | null
  }

  export type MealScheduleAvgAggregateOutputType = {
    id: number | null
    mealId: number | null
  }

  export type MealScheduleSumAggregateOutputType = {
    id: number | null
    mealId: number | null
  }

  export type MealScheduleMinAggregateOutputType = {
    id: number | null
    mealId: number | null
    scheduledDate: Date | null
  }

  export type MealScheduleMaxAggregateOutputType = {
    id: number | null
    mealId: number | null
    scheduledDate: Date | null
  }

  export type MealScheduleCountAggregateOutputType = {
    id: number
    mealId: number
    scheduledDate: number
    _all: number
  }


  export type MealScheduleAvgAggregateInputType = {
    id?: true
    mealId?: true
  }

  export type MealScheduleSumAggregateInputType = {
    id?: true
    mealId?: true
  }

  export type MealScheduleMinAggregateInputType = {
    id?: true
    mealId?: true
    scheduledDate?: true
  }

  export type MealScheduleMaxAggregateInputType = {
    id?: true
    mealId?: true
    scheduledDate?: true
  }

  export type MealScheduleCountAggregateInputType = {
    id?: true
    mealId?: true
    scheduledDate?: true
    _all?: true
  }

  export type MealScheduleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MealSchedule to aggregate.
     */
    where?: MealScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MealSchedules to fetch.
     */
    orderBy?: MealScheduleOrderByWithRelationInput | MealScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MealScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MealSchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MealSchedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MealSchedules
    **/
    _count?: true | MealScheduleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MealScheduleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MealScheduleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MealScheduleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MealScheduleMaxAggregateInputType
  }

  export type GetMealScheduleAggregateType<T extends MealScheduleAggregateArgs> = {
        [P in keyof T & keyof AggregateMealSchedule]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMealSchedule[P]>
      : GetScalarType<T[P], AggregateMealSchedule[P]>
  }




  export type MealScheduleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MealScheduleWhereInput
    orderBy?: MealScheduleOrderByWithAggregationInput | MealScheduleOrderByWithAggregationInput[]
    by: MealScheduleScalarFieldEnum[] | MealScheduleScalarFieldEnum
    having?: MealScheduleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MealScheduleCountAggregateInputType | true
    _avg?: MealScheduleAvgAggregateInputType
    _sum?: MealScheduleSumAggregateInputType
    _min?: MealScheduleMinAggregateInputType
    _max?: MealScheduleMaxAggregateInputType
  }

  export type MealScheduleGroupByOutputType = {
    id: number
    mealId: number
    scheduledDate: Date
    _count: MealScheduleCountAggregateOutputType | null
    _avg: MealScheduleAvgAggregateOutputType | null
    _sum: MealScheduleSumAggregateOutputType | null
    _min: MealScheduleMinAggregateOutputType | null
    _max: MealScheduleMaxAggregateOutputType | null
  }

  type GetMealScheduleGroupByPayload<T extends MealScheduleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MealScheduleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MealScheduleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MealScheduleGroupByOutputType[P]>
            : GetScalarType<T[P], MealScheduleGroupByOutputType[P]>
        }
      >
    >


  export type MealScheduleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mealId?: boolean
    scheduledDate?: boolean
    meal?: boolean | MealDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mealSchedule"]>

  export type MealScheduleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mealId?: boolean
    scheduledDate?: boolean
    meal?: boolean | MealDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mealSchedule"]>

  export type MealScheduleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mealId?: boolean
    scheduledDate?: boolean
    meal?: boolean | MealDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mealSchedule"]>

  export type MealScheduleSelectScalar = {
    id?: boolean
    mealId?: boolean
    scheduledDate?: boolean
  }

  export type MealScheduleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "mealId" | "scheduledDate", ExtArgs["result"]["mealSchedule"]>
  export type MealScheduleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meal?: boolean | MealDefaultArgs<ExtArgs>
  }
  export type MealScheduleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meal?: boolean | MealDefaultArgs<ExtArgs>
  }
  export type MealScheduleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meal?: boolean | MealDefaultArgs<ExtArgs>
  }

  export type $MealSchedulePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MealSchedule"
    objects: {
      meal: Prisma.$MealPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      mealId: number
      scheduledDate: Date
    }, ExtArgs["result"]["mealSchedule"]>
    composites: {}
  }

  type MealScheduleGetPayload<S extends boolean | null | undefined | MealScheduleDefaultArgs> = $Result.GetResult<Prisma.$MealSchedulePayload, S>

  type MealScheduleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MealScheduleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MealScheduleCountAggregateInputType | true
    }

  export interface MealScheduleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MealSchedule'], meta: { name: 'MealSchedule' } }
    /**
     * Find zero or one MealSchedule that matches the filter.
     * @param {MealScheduleFindUniqueArgs} args - Arguments to find a MealSchedule
     * @example
     * // Get one MealSchedule
     * const mealSchedule = await prisma.mealSchedule.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MealScheduleFindUniqueArgs>(args: SelectSubset<T, MealScheduleFindUniqueArgs<ExtArgs>>): Prisma__MealScheduleClient<$Result.GetResult<Prisma.$MealSchedulePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MealSchedule that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MealScheduleFindUniqueOrThrowArgs} args - Arguments to find a MealSchedule
     * @example
     * // Get one MealSchedule
     * const mealSchedule = await prisma.mealSchedule.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MealScheduleFindUniqueOrThrowArgs>(args: SelectSubset<T, MealScheduleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MealScheduleClient<$Result.GetResult<Prisma.$MealSchedulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MealSchedule that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealScheduleFindFirstArgs} args - Arguments to find a MealSchedule
     * @example
     * // Get one MealSchedule
     * const mealSchedule = await prisma.mealSchedule.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MealScheduleFindFirstArgs>(args?: SelectSubset<T, MealScheduleFindFirstArgs<ExtArgs>>): Prisma__MealScheduleClient<$Result.GetResult<Prisma.$MealSchedulePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MealSchedule that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealScheduleFindFirstOrThrowArgs} args - Arguments to find a MealSchedule
     * @example
     * // Get one MealSchedule
     * const mealSchedule = await prisma.mealSchedule.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MealScheduleFindFirstOrThrowArgs>(args?: SelectSubset<T, MealScheduleFindFirstOrThrowArgs<ExtArgs>>): Prisma__MealScheduleClient<$Result.GetResult<Prisma.$MealSchedulePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MealSchedules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealScheduleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MealSchedules
     * const mealSchedules = await prisma.mealSchedule.findMany()
     * 
     * // Get first 10 MealSchedules
     * const mealSchedules = await prisma.mealSchedule.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mealScheduleWithIdOnly = await prisma.mealSchedule.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MealScheduleFindManyArgs>(args?: SelectSubset<T, MealScheduleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MealSchedulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MealSchedule.
     * @param {MealScheduleCreateArgs} args - Arguments to create a MealSchedule.
     * @example
     * // Create one MealSchedule
     * const MealSchedule = await prisma.mealSchedule.create({
     *   data: {
     *     // ... data to create a MealSchedule
     *   }
     * })
     * 
     */
    create<T extends MealScheduleCreateArgs>(args: SelectSubset<T, MealScheduleCreateArgs<ExtArgs>>): Prisma__MealScheduleClient<$Result.GetResult<Prisma.$MealSchedulePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MealSchedules.
     * @param {MealScheduleCreateManyArgs} args - Arguments to create many MealSchedules.
     * @example
     * // Create many MealSchedules
     * const mealSchedule = await prisma.mealSchedule.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MealScheduleCreateManyArgs>(args?: SelectSubset<T, MealScheduleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MealSchedules and returns the data saved in the database.
     * @param {MealScheduleCreateManyAndReturnArgs} args - Arguments to create many MealSchedules.
     * @example
     * // Create many MealSchedules
     * const mealSchedule = await prisma.mealSchedule.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MealSchedules and only return the `id`
     * const mealScheduleWithIdOnly = await prisma.mealSchedule.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MealScheduleCreateManyAndReturnArgs>(args?: SelectSubset<T, MealScheduleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MealSchedulePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MealSchedule.
     * @param {MealScheduleDeleteArgs} args - Arguments to delete one MealSchedule.
     * @example
     * // Delete one MealSchedule
     * const MealSchedule = await prisma.mealSchedule.delete({
     *   where: {
     *     // ... filter to delete one MealSchedule
     *   }
     * })
     * 
     */
    delete<T extends MealScheduleDeleteArgs>(args: SelectSubset<T, MealScheduleDeleteArgs<ExtArgs>>): Prisma__MealScheduleClient<$Result.GetResult<Prisma.$MealSchedulePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MealSchedule.
     * @param {MealScheduleUpdateArgs} args - Arguments to update one MealSchedule.
     * @example
     * // Update one MealSchedule
     * const mealSchedule = await prisma.mealSchedule.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MealScheduleUpdateArgs>(args: SelectSubset<T, MealScheduleUpdateArgs<ExtArgs>>): Prisma__MealScheduleClient<$Result.GetResult<Prisma.$MealSchedulePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MealSchedules.
     * @param {MealScheduleDeleteManyArgs} args - Arguments to filter MealSchedules to delete.
     * @example
     * // Delete a few MealSchedules
     * const { count } = await prisma.mealSchedule.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MealScheduleDeleteManyArgs>(args?: SelectSubset<T, MealScheduleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MealSchedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealScheduleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MealSchedules
     * const mealSchedule = await prisma.mealSchedule.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MealScheduleUpdateManyArgs>(args: SelectSubset<T, MealScheduleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MealSchedules and returns the data updated in the database.
     * @param {MealScheduleUpdateManyAndReturnArgs} args - Arguments to update many MealSchedules.
     * @example
     * // Update many MealSchedules
     * const mealSchedule = await prisma.mealSchedule.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MealSchedules and only return the `id`
     * const mealScheduleWithIdOnly = await prisma.mealSchedule.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MealScheduleUpdateManyAndReturnArgs>(args: SelectSubset<T, MealScheduleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MealSchedulePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MealSchedule.
     * @param {MealScheduleUpsertArgs} args - Arguments to update or create a MealSchedule.
     * @example
     * // Update or create a MealSchedule
     * const mealSchedule = await prisma.mealSchedule.upsert({
     *   create: {
     *     // ... data to create a MealSchedule
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MealSchedule we want to update
     *   }
     * })
     */
    upsert<T extends MealScheduleUpsertArgs>(args: SelectSubset<T, MealScheduleUpsertArgs<ExtArgs>>): Prisma__MealScheduleClient<$Result.GetResult<Prisma.$MealSchedulePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MealSchedules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealScheduleCountArgs} args - Arguments to filter MealSchedules to count.
     * @example
     * // Count the number of MealSchedules
     * const count = await prisma.mealSchedule.count({
     *   where: {
     *     // ... the filter for the MealSchedules we want to count
     *   }
     * })
    **/
    count<T extends MealScheduleCountArgs>(
      args?: Subset<T, MealScheduleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MealScheduleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MealSchedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealScheduleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MealScheduleAggregateArgs>(args: Subset<T, MealScheduleAggregateArgs>): Prisma.PrismaPromise<GetMealScheduleAggregateType<T>>

    /**
     * Group by MealSchedule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealScheduleGroupByArgs} args - Group by arguments.
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
      T extends MealScheduleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MealScheduleGroupByArgs['orderBy'] }
        : { orderBy?: MealScheduleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
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
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MealScheduleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMealScheduleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MealSchedule model
   */
  readonly fields: MealScheduleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MealSchedule.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MealScheduleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    meal<T extends MealDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MealDefaultArgs<ExtArgs>>): Prisma__MealClient<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MealSchedule model
   */
  interface MealScheduleFieldRefs {
    readonly id: FieldRef<"MealSchedule", 'Int'>
    readonly mealId: FieldRef<"MealSchedule", 'Int'>
    readonly scheduledDate: FieldRef<"MealSchedule", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MealSchedule findUnique
   */
  export type MealScheduleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealSchedule
     */
    select?: MealScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealSchedule
     */
    omit?: MealScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealScheduleInclude<ExtArgs> | null
    /**
     * Filter, which MealSchedule to fetch.
     */
    where: MealScheduleWhereUniqueInput
  }

  /**
   * MealSchedule findUniqueOrThrow
   */
  export type MealScheduleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealSchedule
     */
    select?: MealScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealSchedule
     */
    omit?: MealScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealScheduleInclude<ExtArgs> | null
    /**
     * Filter, which MealSchedule to fetch.
     */
    where: MealScheduleWhereUniqueInput
  }

  /**
   * MealSchedule findFirst
   */
  export type MealScheduleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealSchedule
     */
    select?: MealScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealSchedule
     */
    omit?: MealScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealScheduleInclude<ExtArgs> | null
    /**
     * Filter, which MealSchedule to fetch.
     */
    where?: MealScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MealSchedules to fetch.
     */
    orderBy?: MealScheduleOrderByWithRelationInput | MealScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MealSchedules.
     */
    cursor?: MealScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MealSchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MealSchedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MealSchedules.
     */
    distinct?: MealScheduleScalarFieldEnum | MealScheduleScalarFieldEnum[]
  }

  /**
   * MealSchedule findFirstOrThrow
   */
  export type MealScheduleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealSchedule
     */
    select?: MealScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealSchedule
     */
    omit?: MealScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealScheduleInclude<ExtArgs> | null
    /**
     * Filter, which MealSchedule to fetch.
     */
    where?: MealScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MealSchedules to fetch.
     */
    orderBy?: MealScheduleOrderByWithRelationInput | MealScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MealSchedules.
     */
    cursor?: MealScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MealSchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MealSchedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MealSchedules.
     */
    distinct?: MealScheduleScalarFieldEnum | MealScheduleScalarFieldEnum[]
  }

  /**
   * MealSchedule findMany
   */
  export type MealScheduleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealSchedule
     */
    select?: MealScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealSchedule
     */
    omit?: MealScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealScheduleInclude<ExtArgs> | null
    /**
     * Filter, which MealSchedules to fetch.
     */
    where?: MealScheduleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MealSchedules to fetch.
     */
    orderBy?: MealScheduleOrderByWithRelationInput | MealScheduleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MealSchedules.
     */
    cursor?: MealScheduleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MealSchedules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MealSchedules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MealSchedules.
     */
    distinct?: MealScheduleScalarFieldEnum | MealScheduleScalarFieldEnum[]
  }

  /**
   * MealSchedule create
   */
  export type MealScheduleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealSchedule
     */
    select?: MealScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealSchedule
     */
    omit?: MealScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealScheduleInclude<ExtArgs> | null
    /**
     * The data needed to create a MealSchedule.
     */
    data: XOR<MealScheduleCreateInput, MealScheduleUncheckedCreateInput>
  }

  /**
   * MealSchedule createMany
   */
  export type MealScheduleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MealSchedules.
     */
    data: MealScheduleCreateManyInput | MealScheduleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MealSchedule createManyAndReturn
   */
  export type MealScheduleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealSchedule
     */
    select?: MealScheduleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MealSchedule
     */
    omit?: MealScheduleOmit<ExtArgs> | null
    /**
     * The data used to create many MealSchedules.
     */
    data: MealScheduleCreateManyInput | MealScheduleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealScheduleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MealSchedule update
   */
  export type MealScheduleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealSchedule
     */
    select?: MealScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealSchedule
     */
    omit?: MealScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealScheduleInclude<ExtArgs> | null
    /**
     * The data needed to update a MealSchedule.
     */
    data: XOR<MealScheduleUpdateInput, MealScheduleUncheckedUpdateInput>
    /**
     * Choose, which MealSchedule to update.
     */
    where: MealScheduleWhereUniqueInput
  }

  /**
   * MealSchedule updateMany
   */
  export type MealScheduleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MealSchedules.
     */
    data: XOR<MealScheduleUpdateManyMutationInput, MealScheduleUncheckedUpdateManyInput>
    /**
     * Filter which MealSchedules to update
     */
    where?: MealScheduleWhereInput
    /**
     * Limit how many MealSchedules to update.
     */
    limit?: number
  }

  /**
   * MealSchedule updateManyAndReturn
   */
  export type MealScheduleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealSchedule
     */
    select?: MealScheduleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MealSchedule
     */
    omit?: MealScheduleOmit<ExtArgs> | null
    /**
     * The data used to update MealSchedules.
     */
    data: XOR<MealScheduleUpdateManyMutationInput, MealScheduleUncheckedUpdateManyInput>
    /**
     * Filter which MealSchedules to update
     */
    where?: MealScheduleWhereInput
    /**
     * Limit how many MealSchedules to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealScheduleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MealSchedule upsert
   */
  export type MealScheduleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealSchedule
     */
    select?: MealScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealSchedule
     */
    omit?: MealScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealScheduleInclude<ExtArgs> | null
    /**
     * The filter to search for the MealSchedule to update in case it exists.
     */
    where: MealScheduleWhereUniqueInput
    /**
     * In case the MealSchedule found by the `where` argument doesn't exist, create a new MealSchedule with this data.
     */
    create: XOR<MealScheduleCreateInput, MealScheduleUncheckedCreateInput>
    /**
     * In case the MealSchedule was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MealScheduleUpdateInput, MealScheduleUncheckedUpdateInput>
  }

  /**
   * MealSchedule delete
   */
  export type MealScheduleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealSchedule
     */
    select?: MealScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealSchedule
     */
    omit?: MealScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealScheduleInclude<ExtArgs> | null
    /**
     * Filter which MealSchedule to delete.
     */
    where: MealScheduleWhereUniqueInput
  }

  /**
   * MealSchedule deleteMany
   */
  export type MealScheduleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MealSchedules to delete
     */
    where?: MealScheduleWhereInput
    /**
     * Limit how many MealSchedules to delete.
     */
    limit?: number
  }

  /**
   * MealSchedule without action
   */
  export type MealScheduleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealSchedule
     */
    select?: MealScheduleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealSchedule
     */
    omit?: MealScheduleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealScheduleInclude<ExtArgs> | null
  }


  /**
   * Model Comment
   */

  export type AggregateComment = {
    _count: CommentCountAggregateOutputType | null
    _avg: CommentAvgAggregateOutputType | null
    _sum: CommentSumAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  export type CommentAvgAggregateOutputType = {
    id: number | null
    mealId: number | null
  }

  export type CommentSumAggregateOutputType = {
    id: number | null
    mealId: number | null
  }

  export type CommentMinAggregateOutputType = {
    id: number | null
    mealId: number | null
    text: string | null
    createdAt: Date | null
  }

  export type CommentMaxAggregateOutputType = {
    id: number | null
    mealId: number | null
    text: string | null
    createdAt: Date | null
  }

  export type CommentCountAggregateOutputType = {
    id: number
    mealId: number
    text: number
    createdAt: number
    _all: number
  }


  export type CommentAvgAggregateInputType = {
    id?: true
    mealId?: true
  }

  export type CommentSumAggregateInputType = {
    id?: true
    mealId?: true
  }

  export type CommentMinAggregateInputType = {
    id?: true
    mealId?: true
    text?: true
    createdAt?: true
  }

  export type CommentMaxAggregateInputType = {
    id?: true
    mealId?: true
    text?: true
    createdAt?: true
  }

  export type CommentCountAggregateInputType = {
    id?: true
    mealId?: true
    text?: true
    createdAt?: true
    _all?: true
  }

  export type CommentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comment to aggregate.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Comments
    **/
    _count?: true | CommentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CommentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CommentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommentMaxAggregateInputType
  }

  export type GetCommentAggregateType<T extends CommentAggregateArgs> = {
        [P in keyof T & keyof AggregateComment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateComment[P]>
      : GetScalarType<T[P], AggregateComment[P]>
  }




  export type CommentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommentWhereInput
    orderBy?: CommentOrderByWithAggregationInput | CommentOrderByWithAggregationInput[]
    by: CommentScalarFieldEnum[] | CommentScalarFieldEnum
    having?: CommentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommentCountAggregateInputType | true
    _avg?: CommentAvgAggregateInputType
    _sum?: CommentSumAggregateInputType
    _min?: CommentMinAggregateInputType
    _max?: CommentMaxAggregateInputType
  }

  export type CommentGroupByOutputType = {
    id: number
    mealId: number
    text: string
    createdAt: Date
    _count: CommentCountAggregateOutputType | null
    _avg: CommentAvgAggregateOutputType | null
    _sum: CommentSumAggregateOutputType | null
    _min: CommentMinAggregateOutputType | null
    _max: CommentMaxAggregateOutputType | null
  }

  type GetCommentGroupByPayload<T extends CommentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommentGroupByOutputType[P]>
            : GetScalarType<T[P], CommentGroupByOutputType[P]>
        }
      >
    >


  export type CommentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mealId?: boolean
    text?: boolean
    createdAt?: boolean
    meal?: boolean | MealDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mealId?: boolean
    text?: boolean
    createdAt?: boolean
    meal?: boolean | MealDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mealId?: boolean
    text?: boolean
    createdAt?: boolean
    meal?: boolean | MealDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["comment"]>

  export type CommentSelectScalar = {
    id?: boolean
    mealId?: boolean
    text?: boolean
    createdAt?: boolean
  }

  export type CommentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "mealId" | "text" | "createdAt", ExtArgs["result"]["comment"]>
  export type CommentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meal?: boolean | MealDefaultArgs<ExtArgs>
  }
  export type CommentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meal?: boolean | MealDefaultArgs<ExtArgs>
  }
  export type CommentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meal?: boolean | MealDefaultArgs<ExtArgs>
  }

  export type $CommentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Comment"
    objects: {
      meal: Prisma.$MealPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      mealId: number
      text: string
      createdAt: Date
    }, ExtArgs["result"]["comment"]>
    composites: {}
  }

  type CommentGetPayload<S extends boolean | null | undefined | CommentDefaultArgs> = $Result.GetResult<Prisma.$CommentPayload, S>

  type CommentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CommentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommentCountAggregateInputType | true
    }

  export interface CommentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Comment'], meta: { name: 'Comment' } }
    /**
     * Find zero or one Comment that matches the filter.
     * @param {CommentFindUniqueArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommentFindUniqueArgs>(args: SelectSubset<T, CommentFindUniqueArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Comment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommentFindUniqueOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommentFindUniqueOrThrowArgs>(args: SelectSubset<T, CommentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommentFindFirstArgs>(args?: SelectSubset<T, CommentFindFirstArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Comment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindFirstOrThrowArgs} args - Arguments to find a Comment
     * @example
     * // Get one Comment
     * const comment = await prisma.comment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommentFindFirstOrThrowArgs>(args?: SelectSubset<T, CommentFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Comments
     * const comments = await prisma.comment.findMany()
     * 
     * // Get first 10 Comments
     * const comments = await prisma.comment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commentWithIdOnly = await prisma.comment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CommentFindManyArgs>(args?: SelectSubset<T, CommentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Comment.
     * @param {CommentCreateArgs} args - Arguments to create a Comment.
     * @example
     * // Create one Comment
     * const Comment = await prisma.comment.create({
     *   data: {
     *     // ... data to create a Comment
     *   }
     * })
     * 
     */
    create<T extends CommentCreateArgs>(args: SelectSubset<T, CommentCreateArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Comments.
     * @param {CommentCreateManyArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comment = await prisma.comment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommentCreateManyArgs>(args?: SelectSubset<T, CommentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Comments and returns the data saved in the database.
     * @param {CommentCreateManyAndReturnArgs} args - Arguments to create many Comments.
     * @example
     * // Create many Comments
     * const comment = await prisma.comment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Comments and only return the `id`
     * const commentWithIdOnly = await prisma.comment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CommentCreateManyAndReturnArgs>(args?: SelectSubset<T, CommentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Comment.
     * @param {CommentDeleteArgs} args - Arguments to delete one Comment.
     * @example
     * // Delete one Comment
     * const Comment = await prisma.comment.delete({
     *   where: {
     *     // ... filter to delete one Comment
     *   }
     * })
     * 
     */
    delete<T extends CommentDeleteArgs>(args: SelectSubset<T, CommentDeleteArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Comment.
     * @param {CommentUpdateArgs} args - Arguments to update one Comment.
     * @example
     * // Update one Comment
     * const comment = await prisma.comment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommentUpdateArgs>(args: SelectSubset<T, CommentUpdateArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Comments.
     * @param {CommentDeleteManyArgs} args - Arguments to filter Comments to delete.
     * @example
     * // Delete a few Comments
     * const { count } = await prisma.comment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommentDeleteManyArgs>(args?: SelectSubset<T, CommentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommentUpdateManyArgs>(args: SelectSubset<T, CommentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Comments and returns the data updated in the database.
     * @param {CommentUpdateManyAndReturnArgs} args - Arguments to update many Comments.
     * @example
     * // Update many Comments
     * const comment = await prisma.comment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Comments and only return the `id`
     * const commentWithIdOnly = await prisma.comment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CommentUpdateManyAndReturnArgs>(args: SelectSubset<T, CommentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Comment.
     * @param {CommentUpsertArgs} args - Arguments to update or create a Comment.
     * @example
     * // Update or create a Comment
     * const comment = await prisma.comment.upsert({
     *   create: {
     *     // ... data to create a Comment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Comment we want to update
     *   }
     * })
     */
    upsert<T extends CommentUpsertArgs>(args: SelectSubset<T, CommentUpsertArgs<ExtArgs>>): Prisma__CommentClient<$Result.GetResult<Prisma.$CommentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentCountArgs} args - Arguments to filter Comments to count.
     * @example
     * // Count the number of Comments
     * const count = await prisma.comment.count({
     *   where: {
     *     // ... the filter for the Comments we want to count
     *   }
     * })
    **/
    count<T extends CommentCountArgs>(
      args?: Subset<T, CommentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CommentAggregateArgs>(args: Subset<T, CommentAggregateArgs>): Prisma.PrismaPromise<GetCommentAggregateType<T>>

    /**
     * Group by Comment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommentGroupByArgs} args - Group by arguments.
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
      T extends CommentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommentGroupByArgs['orderBy'] }
        : { orderBy?: CommentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
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
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CommentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Comment model
   */
  readonly fields: CommentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Comment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    meal<T extends MealDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MealDefaultArgs<ExtArgs>>): Prisma__MealClient<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Comment model
   */
  interface CommentFieldRefs {
    readonly id: FieldRef<"Comment", 'Int'>
    readonly mealId: FieldRef<"Comment", 'Int'>
    readonly text: FieldRef<"Comment", 'String'>
    readonly createdAt: FieldRef<"Comment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Comment findUnique
   */
  export type CommentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment findUniqueOrThrow
   */
  export type CommentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment findFirst
   */
  export type CommentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment findFirstOrThrow
   */
  export type CommentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comment to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment findMany
   */
  export type CommentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter, which Comments to fetch.
     */
    where?: CommentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Comments to fetch.
     */
    orderBy?: CommentOrderByWithRelationInput | CommentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Comments.
     */
    cursor?: CommentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Comments.
     */
    distinct?: CommentScalarFieldEnum | CommentScalarFieldEnum[]
  }

  /**
   * Comment create
   */
  export type CommentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to create a Comment.
     */
    data: XOR<CommentCreateInput, CommentUncheckedCreateInput>
  }

  /**
   * Comment createMany
   */
  export type CommentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Comments.
     */
    data: CommentCreateManyInput | CommentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Comment createManyAndReturn
   */
  export type CommentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * The data used to create many Comments.
     */
    data: CommentCreateManyInput | CommentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Comment update
   */
  export type CommentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The data needed to update a Comment.
     */
    data: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
    /**
     * Choose, which Comment to update.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment updateMany
   */
  export type CommentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to update.
     */
    limit?: number
  }

  /**
   * Comment updateManyAndReturn
   */
  export type CommentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * The data used to update Comments.
     */
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyInput>
    /**
     * Filter which Comments to update
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Comment upsert
   */
  export type CommentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * The filter to search for the Comment to update in case it exists.
     */
    where: CommentWhereUniqueInput
    /**
     * In case the Comment found by the `where` argument doesn't exist, create a new Comment with this data.
     */
    create: XOR<CommentCreateInput, CommentUncheckedCreateInput>
    /**
     * In case the Comment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommentUpdateInput, CommentUncheckedUpdateInput>
  }

  /**
   * Comment delete
   */
  export type CommentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
    /**
     * Filter which Comment to delete.
     */
    where: CommentWhereUniqueInput
  }

  /**
   * Comment deleteMany
   */
  export type CommentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Comments to delete
     */
    where?: CommentWhereInput
    /**
     * Limit how many Comments to delete.
     */
    limit?: number
  }

  /**
   * Comment without action
   */
  export type CommentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Comment
     */
    select?: CommentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Comment
     */
    omit?: CommentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommentInclude<ExtArgs> | null
  }


  /**
   * Model Rating
   */

  export type AggregateRating = {
    _count: RatingCountAggregateOutputType | null
    _avg: RatingAvgAggregateOutputType | null
    _sum: RatingSumAggregateOutputType | null
    _min: RatingMinAggregateOutputType | null
    _max: RatingMaxAggregateOutputType | null
  }

  export type RatingAvgAggregateOutputType = {
    id: number | null
    mealId: number | null
    score: number | null
  }

  export type RatingSumAggregateOutputType = {
    id: number | null
    mealId: number | null
    score: number | null
  }

  export type RatingMinAggregateOutputType = {
    id: number | null
    mealId: number | null
    score: number | null
    createdAt: Date | null
  }

  export type RatingMaxAggregateOutputType = {
    id: number | null
    mealId: number | null
    score: number | null
    createdAt: Date | null
  }

  export type RatingCountAggregateOutputType = {
    id: number
    mealId: number
    score: number
    createdAt: number
    _all: number
  }


  export type RatingAvgAggregateInputType = {
    id?: true
    mealId?: true
    score?: true
  }

  export type RatingSumAggregateInputType = {
    id?: true
    mealId?: true
    score?: true
  }

  export type RatingMinAggregateInputType = {
    id?: true
    mealId?: true
    score?: true
    createdAt?: true
  }

  export type RatingMaxAggregateInputType = {
    id?: true
    mealId?: true
    score?: true
    createdAt?: true
  }

  export type RatingCountAggregateInputType = {
    id?: true
    mealId?: true
    score?: true
    createdAt?: true
    _all?: true
  }

  export type RatingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rating to aggregate.
     */
    where?: RatingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ratings to fetch.
     */
    orderBy?: RatingOrderByWithRelationInput | RatingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RatingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ratings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ratings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Ratings
    **/
    _count?: true | RatingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RatingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RatingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RatingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RatingMaxAggregateInputType
  }

  export type GetRatingAggregateType<T extends RatingAggregateArgs> = {
        [P in keyof T & keyof AggregateRating]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRating[P]>
      : GetScalarType<T[P], AggregateRating[P]>
  }




  export type RatingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RatingWhereInput
    orderBy?: RatingOrderByWithAggregationInput | RatingOrderByWithAggregationInput[]
    by: RatingScalarFieldEnum[] | RatingScalarFieldEnum
    having?: RatingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RatingCountAggregateInputType | true
    _avg?: RatingAvgAggregateInputType
    _sum?: RatingSumAggregateInputType
    _min?: RatingMinAggregateInputType
    _max?: RatingMaxAggregateInputType
  }

  export type RatingGroupByOutputType = {
    id: number
    mealId: number
    score: number
    createdAt: Date
    _count: RatingCountAggregateOutputType | null
    _avg: RatingAvgAggregateOutputType | null
    _sum: RatingSumAggregateOutputType | null
    _min: RatingMinAggregateOutputType | null
    _max: RatingMaxAggregateOutputType | null
  }

  type GetRatingGroupByPayload<T extends RatingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RatingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RatingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RatingGroupByOutputType[P]>
            : GetScalarType<T[P], RatingGroupByOutputType[P]>
        }
      >
    >


  export type RatingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mealId?: boolean
    score?: boolean
    createdAt?: boolean
    meal?: boolean | MealDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rating"]>

  export type RatingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mealId?: boolean
    score?: boolean
    createdAt?: boolean
    meal?: boolean | MealDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rating"]>

  export type RatingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mealId?: boolean
    score?: boolean
    createdAt?: boolean
    meal?: boolean | MealDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rating"]>

  export type RatingSelectScalar = {
    id?: boolean
    mealId?: boolean
    score?: boolean
    createdAt?: boolean
  }

  export type RatingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "mealId" | "score" | "createdAt", ExtArgs["result"]["rating"]>
  export type RatingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meal?: boolean | MealDefaultArgs<ExtArgs>
  }
  export type RatingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meal?: boolean | MealDefaultArgs<ExtArgs>
  }
  export type RatingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meal?: boolean | MealDefaultArgs<ExtArgs>
  }

  export type $RatingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Rating"
    objects: {
      meal: Prisma.$MealPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      mealId: number
      score: number
      createdAt: Date
    }, ExtArgs["result"]["rating"]>
    composites: {}
  }

  type RatingGetPayload<S extends boolean | null | undefined | RatingDefaultArgs> = $Result.GetResult<Prisma.$RatingPayload, S>

  type RatingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RatingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RatingCountAggregateInputType | true
    }

  export interface RatingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Rating'], meta: { name: 'Rating' } }
    /**
     * Find zero or one Rating that matches the filter.
     * @param {RatingFindUniqueArgs} args - Arguments to find a Rating
     * @example
     * // Get one Rating
     * const rating = await prisma.rating.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RatingFindUniqueArgs>(args: SelectSubset<T, RatingFindUniqueArgs<ExtArgs>>): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Rating that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RatingFindUniqueOrThrowArgs} args - Arguments to find a Rating
     * @example
     * // Get one Rating
     * const rating = await prisma.rating.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RatingFindUniqueOrThrowArgs>(args: SelectSubset<T, RatingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rating that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingFindFirstArgs} args - Arguments to find a Rating
     * @example
     * // Get one Rating
     * const rating = await prisma.rating.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RatingFindFirstArgs>(args?: SelectSubset<T, RatingFindFirstArgs<ExtArgs>>): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rating that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingFindFirstOrThrowArgs} args - Arguments to find a Rating
     * @example
     * // Get one Rating
     * const rating = await prisma.rating.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RatingFindFirstOrThrowArgs>(args?: SelectSubset<T, RatingFindFirstOrThrowArgs<ExtArgs>>): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ratings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ratings
     * const ratings = await prisma.rating.findMany()
     * 
     * // Get first 10 Ratings
     * const ratings = await prisma.rating.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ratingWithIdOnly = await prisma.rating.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RatingFindManyArgs>(args?: SelectSubset<T, RatingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Rating.
     * @param {RatingCreateArgs} args - Arguments to create a Rating.
     * @example
     * // Create one Rating
     * const Rating = await prisma.rating.create({
     *   data: {
     *     // ... data to create a Rating
     *   }
     * })
     * 
     */
    create<T extends RatingCreateArgs>(args: SelectSubset<T, RatingCreateArgs<ExtArgs>>): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ratings.
     * @param {RatingCreateManyArgs} args - Arguments to create many Ratings.
     * @example
     * // Create many Ratings
     * const rating = await prisma.rating.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RatingCreateManyArgs>(args?: SelectSubset<T, RatingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Ratings and returns the data saved in the database.
     * @param {RatingCreateManyAndReturnArgs} args - Arguments to create many Ratings.
     * @example
     * // Create many Ratings
     * const rating = await prisma.rating.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Ratings and only return the `id`
     * const ratingWithIdOnly = await prisma.rating.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RatingCreateManyAndReturnArgs>(args?: SelectSubset<T, RatingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Rating.
     * @param {RatingDeleteArgs} args - Arguments to delete one Rating.
     * @example
     * // Delete one Rating
     * const Rating = await prisma.rating.delete({
     *   where: {
     *     // ... filter to delete one Rating
     *   }
     * })
     * 
     */
    delete<T extends RatingDeleteArgs>(args: SelectSubset<T, RatingDeleteArgs<ExtArgs>>): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Rating.
     * @param {RatingUpdateArgs} args - Arguments to update one Rating.
     * @example
     * // Update one Rating
     * const rating = await prisma.rating.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RatingUpdateArgs>(args: SelectSubset<T, RatingUpdateArgs<ExtArgs>>): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ratings.
     * @param {RatingDeleteManyArgs} args - Arguments to filter Ratings to delete.
     * @example
     * // Delete a few Ratings
     * const { count } = await prisma.rating.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RatingDeleteManyArgs>(args?: SelectSubset<T, RatingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ratings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ratings
     * const rating = await prisma.rating.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RatingUpdateManyArgs>(args: SelectSubset<T, RatingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ratings and returns the data updated in the database.
     * @param {RatingUpdateManyAndReturnArgs} args - Arguments to update many Ratings.
     * @example
     * // Update many Ratings
     * const rating = await prisma.rating.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Ratings and only return the `id`
     * const ratingWithIdOnly = await prisma.rating.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RatingUpdateManyAndReturnArgs>(args: SelectSubset<T, RatingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Rating.
     * @param {RatingUpsertArgs} args - Arguments to update or create a Rating.
     * @example
     * // Update or create a Rating
     * const rating = await prisma.rating.upsert({
     *   create: {
     *     // ... data to create a Rating
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rating we want to update
     *   }
     * })
     */
    upsert<T extends RatingUpsertArgs>(args: SelectSubset<T, RatingUpsertArgs<ExtArgs>>): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ratings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingCountArgs} args - Arguments to filter Ratings to count.
     * @example
     * // Count the number of Ratings
     * const count = await prisma.rating.count({
     *   where: {
     *     // ... the filter for the Ratings we want to count
     *   }
     * })
    **/
    count<T extends RatingCountArgs>(
      args?: Subset<T, RatingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RatingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Rating.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RatingAggregateArgs>(args: Subset<T, RatingAggregateArgs>): Prisma.PrismaPromise<GetRatingAggregateType<T>>

    /**
     * Group by Rating.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingGroupByArgs} args - Group by arguments.
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
      T extends RatingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RatingGroupByArgs['orderBy'] }
        : { orderBy?: RatingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
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
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RatingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRatingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Rating model
   */
  readonly fields: RatingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Rating.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RatingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    meal<T extends MealDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MealDefaultArgs<ExtArgs>>): Prisma__MealClient<$Result.GetResult<Prisma.$MealPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Rating model
   */
  interface RatingFieldRefs {
    readonly id: FieldRef<"Rating", 'Int'>
    readonly mealId: FieldRef<"Rating", 'Int'>
    readonly score: FieldRef<"Rating", 'Int'>
    readonly createdAt: FieldRef<"Rating", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Rating findUnique
   */
  export type RatingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * Filter, which Rating to fetch.
     */
    where: RatingWhereUniqueInput
  }

  /**
   * Rating findUniqueOrThrow
   */
  export type RatingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * Filter, which Rating to fetch.
     */
    where: RatingWhereUniqueInput
  }

  /**
   * Rating findFirst
   */
  export type RatingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * Filter, which Rating to fetch.
     */
    where?: RatingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ratings to fetch.
     */
    orderBy?: RatingOrderByWithRelationInput | RatingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ratings.
     */
    cursor?: RatingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ratings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ratings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ratings.
     */
    distinct?: RatingScalarFieldEnum | RatingScalarFieldEnum[]
  }

  /**
   * Rating findFirstOrThrow
   */
  export type RatingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * Filter, which Rating to fetch.
     */
    where?: RatingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ratings to fetch.
     */
    orderBy?: RatingOrderByWithRelationInput | RatingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ratings.
     */
    cursor?: RatingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ratings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ratings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ratings.
     */
    distinct?: RatingScalarFieldEnum | RatingScalarFieldEnum[]
  }

  /**
   * Rating findMany
   */
  export type RatingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * Filter, which Ratings to fetch.
     */
    where?: RatingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ratings to fetch.
     */
    orderBy?: RatingOrderByWithRelationInput | RatingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Ratings.
     */
    cursor?: RatingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ratings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ratings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ratings.
     */
    distinct?: RatingScalarFieldEnum | RatingScalarFieldEnum[]
  }

  /**
   * Rating create
   */
  export type RatingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * The data needed to create a Rating.
     */
    data: XOR<RatingCreateInput, RatingUncheckedCreateInput>
  }

  /**
   * Rating createMany
   */
  export type RatingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Ratings.
     */
    data: RatingCreateManyInput | RatingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Rating createManyAndReturn
   */
  export type RatingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * The data used to create many Ratings.
     */
    data: RatingCreateManyInput | RatingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Rating update
   */
  export type RatingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * The data needed to update a Rating.
     */
    data: XOR<RatingUpdateInput, RatingUncheckedUpdateInput>
    /**
     * Choose, which Rating to update.
     */
    where: RatingWhereUniqueInput
  }

  /**
   * Rating updateMany
   */
  export type RatingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Ratings.
     */
    data: XOR<RatingUpdateManyMutationInput, RatingUncheckedUpdateManyInput>
    /**
     * Filter which Ratings to update
     */
    where?: RatingWhereInput
    /**
     * Limit how many Ratings to update.
     */
    limit?: number
  }

  /**
   * Rating updateManyAndReturn
   */
  export type RatingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * The data used to update Ratings.
     */
    data: XOR<RatingUpdateManyMutationInput, RatingUncheckedUpdateManyInput>
    /**
     * Filter which Ratings to update
     */
    where?: RatingWhereInput
    /**
     * Limit how many Ratings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Rating upsert
   */
  export type RatingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * The filter to search for the Rating to update in case it exists.
     */
    where: RatingWhereUniqueInput
    /**
     * In case the Rating found by the `where` argument doesn't exist, create a new Rating with this data.
     */
    create: XOR<RatingCreateInput, RatingUncheckedCreateInput>
    /**
     * In case the Rating was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RatingUpdateInput, RatingUncheckedUpdateInput>
  }

  /**
   * Rating delete
   */
  export type RatingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * Filter which Rating to delete.
     */
    where: RatingWhereUniqueInput
  }

  /**
   * Rating deleteMany
   */
  export type RatingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ratings to delete
     */
    where?: RatingWhereInput
    /**
     * Limit how many Ratings to delete.
     */
    limit?: number
  }

  /**
   * Rating without action
   */
  export type RatingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rating
     */
    omit?: RatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RatingInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const MealScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    category: 'category',
    image: 'image',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MealScalarFieldEnum = (typeof MealScalarFieldEnum)[keyof typeof MealScalarFieldEnum]


  export const IngredientScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt'
  };

  export type IngredientScalarFieldEnum = (typeof IngredientScalarFieldEnum)[keyof typeof IngredientScalarFieldEnum]


  export const MealIngredientScalarFieldEnum: {
    mealId: 'mealId',
    ingredientId: 'ingredientId',
    quantity: 'quantity',
    unit: 'unit'
  };

  export type MealIngredientScalarFieldEnum = (typeof MealIngredientScalarFieldEnum)[keyof typeof MealIngredientScalarFieldEnum]


  export const MealScheduleScalarFieldEnum: {
    id: 'id',
    mealId: 'mealId',
    scheduledDate: 'scheduledDate'
  };

  export type MealScheduleScalarFieldEnum = (typeof MealScheduleScalarFieldEnum)[keyof typeof MealScheduleScalarFieldEnum]


  export const CommentScalarFieldEnum: {
    id: 'id',
    mealId: 'mealId',
    text: 'text',
    createdAt: 'createdAt'
  };

  export type CommentScalarFieldEnum = (typeof CommentScalarFieldEnum)[keyof typeof CommentScalarFieldEnum]


  export const RatingScalarFieldEnum: {
    id: 'id',
    mealId: 'mealId',
    score: 'score',
    createdAt: 'createdAt'
  };

  export type RatingScalarFieldEnum = (typeof RatingScalarFieldEnum)[keyof typeof RatingScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Category'
   */
  export type EnumCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Category'>
    


  /**
   * Reference to a field of type 'Category[]'
   */
  export type ListEnumCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Category[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type MealWhereInput = {
    AND?: MealWhereInput | MealWhereInput[]
    OR?: MealWhereInput[]
    NOT?: MealWhereInput | MealWhereInput[]
    id?: IntFilter<"Meal"> | number
    name?: StringFilter<"Meal"> | string
    description?: StringNullableFilter<"Meal"> | string | null
    category?: EnumCategoryFilter<"Meal"> | $Enums.Category
    image?: StringNullableFilter<"Meal"> | string | null
    createdAt?: DateTimeFilter<"Meal"> | Date | string
    updatedAt?: DateTimeFilter<"Meal"> | Date | string
    ingredients?: MealIngredientListRelationFilter
    schedules?: MealScheduleListRelationFilter
    comments?: CommentListRelationFilter
    ratings?: RatingListRelationFilter
  }

  export type MealOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    category?: SortOrder
    image?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    ingredients?: MealIngredientOrderByRelationAggregateInput
    schedules?: MealScheduleOrderByRelationAggregateInput
    comments?: CommentOrderByRelationAggregateInput
    ratings?: RatingOrderByRelationAggregateInput
  }

  export type MealWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MealWhereInput | MealWhereInput[]
    OR?: MealWhereInput[]
    NOT?: MealWhereInput | MealWhereInput[]
    name?: StringFilter<"Meal"> | string
    description?: StringNullableFilter<"Meal"> | string | null
    category?: EnumCategoryFilter<"Meal"> | $Enums.Category
    image?: StringNullableFilter<"Meal"> | string | null
    createdAt?: DateTimeFilter<"Meal"> | Date | string
    updatedAt?: DateTimeFilter<"Meal"> | Date | string
    ingredients?: MealIngredientListRelationFilter
    schedules?: MealScheduleListRelationFilter
    comments?: CommentListRelationFilter
    ratings?: RatingListRelationFilter
  }, "id">

  export type MealOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    category?: SortOrder
    image?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MealCountOrderByAggregateInput
    _avg?: MealAvgOrderByAggregateInput
    _max?: MealMaxOrderByAggregateInput
    _min?: MealMinOrderByAggregateInput
    _sum?: MealSumOrderByAggregateInput
  }

  export type MealScalarWhereWithAggregatesInput = {
    AND?: MealScalarWhereWithAggregatesInput | MealScalarWhereWithAggregatesInput[]
    OR?: MealScalarWhereWithAggregatesInput[]
    NOT?: MealScalarWhereWithAggregatesInput | MealScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Meal"> | number
    name?: StringWithAggregatesFilter<"Meal"> | string
    description?: StringNullableWithAggregatesFilter<"Meal"> | string | null
    category?: EnumCategoryWithAggregatesFilter<"Meal"> | $Enums.Category
    image?: StringNullableWithAggregatesFilter<"Meal"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Meal"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Meal"> | Date | string
  }

  export type IngredientWhereInput = {
    AND?: IngredientWhereInput | IngredientWhereInput[]
    OR?: IngredientWhereInput[]
    NOT?: IngredientWhereInput | IngredientWhereInput[]
    id?: IntFilter<"Ingredient"> | number
    name?: StringFilter<"Ingredient"> | string
    createdAt?: DateTimeFilter<"Ingredient"> | Date | string
    meals?: MealIngredientListRelationFilter
  }

  export type IngredientOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    meals?: MealIngredientOrderByRelationAggregateInput
  }

  export type IngredientWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: IngredientWhereInput | IngredientWhereInput[]
    OR?: IngredientWhereInput[]
    NOT?: IngredientWhereInput | IngredientWhereInput[]
    createdAt?: DateTimeFilter<"Ingredient"> | Date | string
    meals?: MealIngredientListRelationFilter
  }, "id" | "name">

  export type IngredientOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    _count?: IngredientCountOrderByAggregateInput
    _avg?: IngredientAvgOrderByAggregateInput
    _max?: IngredientMaxOrderByAggregateInput
    _min?: IngredientMinOrderByAggregateInput
    _sum?: IngredientSumOrderByAggregateInput
  }

  export type IngredientScalarWhereWithAggregatesInput = {
    AND?: IngredientScalarWhereWithAggregatesInput | IngredientScalarWhereWithAggregatesInput[]
    OR?: IngredientScalarWhereWithAggregatesInput[]
    NOT?: IngredientScalarWhereWithAggregatesInput | IngredientScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Ingredient"> | number
    name?: StringWithAggregatesFilter<"Ingredient"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Ingredient"> | Date | string
  }

  export type MealIngredientWhereInput = {
    AND?: MealIngredientWhereInput | MealIngredientWhereInput[]
    OR?: MealIngredientWhereInput[]
    NOT?: MealIngredientWhereInput | MealIngredientWhereInput[]
    mealId?: IntFilter<"MealIngredient"> | number
    ingredientId?: IntFilter<"MealIngredient"> | number
    quantity?: DecimalNullableFilter<"MealIngredient"> | Decimal | DecimalJsLike | number | string | null
    unit?: StringNullableFilter<"MealIngredient"> | string | null
    meal?: XOR<MealScalarRelationFilter, MealWhereInput>
    ingredient?: XOR<IngredientScalarRelationFilter, IngredientWhereInput>
  }

  export type MealIngredientOrderByWithRelationInput = {
    mealId?: SortOrder
    ingredientId?: SortOrder
    quantity?: SortOrderInput | SortOrder
    unit?: SortOrderInput | SortOrder
    meal?: MealOrderByWithRelationInput
    ingredient?: IngredientOrderByWithRelationInput
  }

  export type MealIngredientWhereUniqueInput = Prisma.AtLeast<{
    mealId_ingredientId?: MealIngredientMealIdIngredientIdCompoundUniqueInput
    AND?: MealIngredientWhereInput | MealIngredientWhereInput[]
    OR?: MealIngredientWhereInput[]
    NOT?: MealIngredientWhereInput | MealIngredientWhereInput[]
    mealId?: IntFilter<"MealIngredient"> | number
    ingredientId?: IntFilter<"MealIngredient"> | number
    quantity?: DecimalNullableFilter<"MealIngredient"> | Decimal | DecimalJsLike | number | string | null
    unit?: StringNullableFilter<"MealIngredient"> | string | null
    meal?: XOR<MealScalarRelationFilter, MealWhereInput>
    ingredient?: XOR<IngredientScalarRelationFilter, IngredientWhereInput>
  }, "mealId_ingredientId">

  export type MealIngredientOrderByWithAggregationInput = {
    mealId?: SortOrder
    ingredientId?: SortOrder
    quantity?: SortOrderInput | SortOrder
    unit?: SortOrderInput | SortOrder
    _count?: MealIngredientCountOrderByAggregateInput
    _avg?: MealIngredientAvgOrderByAggregateInput
    _max?: MealIngredientMaxOrderByAggregateInput
    _min?: MealIngredientMinOrderByAggregateInput
    _sum?: MealIngredientSumOrderByAggregateInput
  }

  export type MealIngredientScalarWhereWithAggregatesInput = {
    AND?: MealIngredientScalarWhereWithAggregatesInput | MealIngredientScalarWhereWithAggregatesInput[]
    OR?: MealIngredientScalarWhereWithAggregatesInput[]
    NOT?: MealIngredientScalarWhereWithAggregatesInput | MealIngredientScalarWhereWithAggregatesInput[]
    mealId?: IntWithAggregatesFilter<"MealIngredient"> | number
    ingredientId?: IntWithAggregatesFilter<"MealIngredient"> | number
    quantity?: DecimalNullableWithAggregatesFilter<"MealIngredient"> | Decimal | DecimalJsLike | number | string | null
    unit?: StringNullableWithAggregatesFilter<"MealIngredient"> | string | null
  }

  export type MealScheduleWhereInput = {
    AND?: MealScheduleWhereInput | MealScheduleWhereInput[]
    OR?: MealScheduleWhereInput[]
    NOT?: MealScheduleWhereInput | MealScheduleWhereInput[]
    id?: IntFilter<"MealSchedule"> | number
    mealId?: IntFilter<"MealSchedule"> | number
    scheduledDate?: DateTimeFilter<"MealSchedule"> | Date | string
    meal?: XOR<MealScalarRelationFilter, MealWhereInput>
  }

  export type MealScheduleOrderByWithRelationInput = {
    id?: SortOrder
    mealId?: SortOrder
    scheduledDate?: SortOrder
    meal?: MealOrderByWithRelationInput
  }

  export type MealScheduleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MealScheduleWhereInput | MealScheduleWhereInput[]
    OR?: MealScheduleWhereInput[]
    NOT?: MealScheduleWhereInput | MealScheduleWhereInput[]
    mealId?: IntFilter<"MealSchedule"> | number
    scheduledDate?: DateTimeFilter<"MealSchedule"> | Date | string
    meal?: XOR<MealScalarRelationFilter, MealWhereInput>
  }, "id">

  export type MealScheduleOrderByWithAggregationInput = {
    id?: SortOrder
    mealId?: SortOrder
    scheduledDate?: SortOrder
    _count?: MealScheduleCountOrderByAggregateInput
    _avg?: MealScheduleAvgOrderByAggregateInput
    _max?: MealScheduleMaxOrderByAggregateInput
    _min?: MealScheduleMinOrderByAggregateInput
    _sum?: MealScheduleSumOrderByAggregateInput
  }

  export type MealScheduleScalarWhereWithAggregatesInput = {
    AND?: MealScheduleScalarWhereWithAggregatesInput | MealScheduleScalarWhereWithAggregatesInput[]
    OR?: MealScheduleScalarWhereWithAggregatesInput[]
    NOT?: MealScheduleScalarWhereWithAggregatesInput | MealScheduleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"MealSchedule"> | number
    mealId?: IntWithAggregatesFilter<"MealSchedule"> | number
    scheduledDate?: DateTimeWithAggregatesFilter<"MealSchedule"> | Date | string
  }

  export type CommentWhereInput = {
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    id?: IntFilter<"Comment"> | number
    mealId?: IntFilter<"Comment"> | number
    text?: StringFilter<"Comment"> | string
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    meal?: XOR<MealScalarRelationFilter, MealWhereInput>
  }

  export type CommentOrderByWithRelationInput = {
    id?: SortOrder
    mealId?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
    meal?: MealOrderByWithRelationInput
  }

  export type CommentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CommentWhereInput | CommentWhereInput[]
    OR?: CommentWhereInput[]
    NOT?: CommentWhereInput | CommentWhereInput[]
    mealId?: IntFilter<"Comment"> | number
    text?: StringFilter<"Comment"> | string
    createdAt?: DateTimeFilter<"Comment"> | Date | string
    meal?: XOR<MealScalarRelationFilter, MealWhereInput>
  }, "id">

  export type CommentOrderByWithAggregationInput = {
    id?: SortOrder
    mealId?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
    _count?: CommentCountOrderByAggregateInput
    _avg?: CommentAvgOrderByAggregateInput
    _max?: CommentMaxOrderByAggregateInput
    _min?: CommentMinOrderByAggregateInput
    _sum?: CommentSumOrderByAggregateInput
  }

  export type CommentScalarWhereWithAggregatesInput = {
    AND?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    OR?: CommentScalarWhereWithAggregatesInput[]
    NOT?: CommentScalarWhereWithAggregatesInput | CommentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Comment"> | number
    mealId?: IntWithAggregatesFilter<"Comment"> | number
    text?: StringWithAggregatesFilter<"Comment"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Comment"> | Date | string
  }

  export type RatingWhereInput = {
    AND?: RatingWhereInput | RatingWhereInput[]
    OR?: RatingWhereInput[]
    NOT?: RatingWhereInput | RatingWhereInput[]
    id?: IntFilter<"Rating"> | number
    mealId?: IntFilter<"Rating"> | number
    score?: IntFilter<"Rating"> | number
    createdAt?: DateTimeFilter<"Rating"> | Date | string
    meal?: XOR<MealScalarRelationFilter, MealWhereInput>
  }

  export type RatingOrderByWithRelationInput = {
    id?: SortOrder
    mealId?: SortOrder
    score?: SortOrder
    createdAt?: SortOrder
    meal?: MealOrderByWithRelationInput
  }

  export type RatingWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RatingWhereInput | RatingWhereInput[]
    OR?: RatingWhereInput[]
    NOT?: RatingWhereInput | RatingWhereInput[]
    mealId?: IntFilter<"Rating"> | number
    score?: IntFilter<"Rating"> | number
    createdAt?: DateTimeFilter<"Rating"> | Date | string
    meal?: XOR<MealScalarRelationFilter, MealWhereInput>
  }, "id">

  export type RatingOrderByWithAggregationInput = {
    id?: SortOrder
    mealId?: SortOrder
    score?: SortOrder
    createdAt?: SortOrder
    _count?: RatingCountOrderByAggregateInput
    _avg?: RatingAvgOrderByAggregateInput
    _max?: RatingMaxOrderByAggregateInput
    _min?: RatingMinOrderByAggregateInput
    _sum?: RatingSumOrderByAggregateInput
  }

  export type RatingScalarWhereWithAggregatesInput = {
    AND?: RatingScalarWhereWithAggregatesInput | RatingScalarWhereWithAggregatesInput[]
    OR?: RatingScalarWhereWithAggregatesInput[]
    NOT?: RatingScalarWhereWithAggregatesInput | RatingScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Rating"> | number
    mealId?: IntWithAggregatesFilter<"Rating"> | number
    score?: IntWithAggregatesFilter<"Rating"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Rating"> | Date | string
  }

  export type MealCreateInput = {
    name: string
    description?: string | null
    category: $Enums.Category
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ingredients?: MealIngredientCreateNestedManyWithoutMealInput
    schedules?: MealScheduleCreateNestedManyWithoutMealInput
    comments?: CommentCreateNestedManyWithoutMealInput
    ratings?: RatingCreateNestedManyWithoutMealInput
  }

  export type MealUncheckedCreateInput = {
    id?: number
    name: string
    description?: string | null
    category: $Enums.Category
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ingredients?: MealIngredientUncheckedCreateNestedManyWithoutMealInput
    schedules?: MealScheduleUncheckedCreateNestedManyWithoutMealInput
    comments?: CommentUncheckedCreateNestedManyWithoutMealInput
    ratings?: RatingUncheckedCreateNestedManyWithoutMealInput
  }

  export type MealUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ingredients?: MealIngredientUpdateManyWithoutMealNestedInput
    schedules?: MealScheduleUpdateManyWithoutMealNestedInput
    comments?: CommentUpdateManyWithoutMealNestedInput
    ratings?: RatingUpdateManyWithoutMealNestedInput
  }

  export type MealUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ingredients?: MealIngredientUncheckedUpdateManyWithoutMealNestedInput
    schedules?: MealScheduleUncheckedUpdateManyWithoutMealNestedInput
    comments?: CommentUncheckedUpdateManyWithoutMealNestedInput
    ratings?: RatingUncheckedUpdateManyWithoutMealNestedInput
  }

  export type MealCreateManyInput = {
    id?: number
    name: string
    description?: string | null
    category: $Enums.Category
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MealUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MealUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IngredientCreateInput = {
    name: string
    createdAt?: Date | string
    meals?: MealIngredientCreateNestedManyWithoutIngredientInput
  }

  export type IngredientUncheckedCreateInput = {
    id?: number
    name: string
    createdAt?: Date | string
    meals?: MealIngredientUncheckedCreateNestedManyWithoutIngredientInput
  }

  export type IngredientUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    meals?: MealIngredientUpdateManyWithoutIngredientNestedInput
  }

  export type IngredientUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    meals?: MealIngredientUncheckedUpdateManyWithoutIngredientNestedInput
  }

  export type IngredientCreateManyInput = {
    id?: number
    name: string
    createdAt?: Date | string
  }

  export type IngredientUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IngredientUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MealIngredientCreateInput = {
    quantity?: Decimal | DecimalJsLike | number | string | null
    unit?: string | null
    meal: MealCreateNestedOneWithoutIngredientsInput
    ingredient: IngredientCreateNestedOneWithoutMealsInput
  }

  export type MealIngredientUncheckedCreateInput = {
    mealId: number
    ingredientId: number
    quantity?: Decimal | DecimalJsLike | number | string | null
    unit?: string | null
  }

  export type MealIngredientUpdateInput = {
    quantity?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    meal?: MealUpdateOneRequiredWithoutIngredientsNestedInput
    ingredient?: IngredientUpdateOneRequiredWithoutMealsNestedInput
  }

  export type MealIngredientUncheckedUpdateInput = {
    mealId?: IntFieldUpdateOperationsInput | number
    ingredientId?: IntFieldUpdateOperationsInput | number
    quantity?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    unit?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MealIngredientCreateManyInput = {
    mealId: number
    ingredientId: number
    quantity?: Decimal | DecimalJsLike | number | string | null
    unit?: string | null
  }

  export type MealIngredientUpdateManyMutationInput = {
    quantity?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    unit?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MealIngredientUncheckedUpdateManyInput = {
    mealId?: IntFieldUpdateOperationsInput | number
    ingredientId?: IntFieldUpdateOperationsInput | number
    quantity?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    unit?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MealScheduleCreateInput = {
    scheduledDate: Date | string
    meal: MealCreateNestedOneWithoutSchedulesInput
  }

  export type MealScheduleUncheckedCreateInput = {
    id?: number
    mealId: number
    scheduledDate: Date | string
  }

  export type MealScheduleUpdateInput = {
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
    meal?: MealUpdateOneRequiredWithoutSchedulesNestedInput
  }

  export type MealScheduleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    mealId?: IntFieldUpdateOperationsInput | number
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MealScheduleCreateManyInput = {
    id?: number
    mealId: number
    scheduledDate: Date | string
  }

  export type MealScheduleUpdateManyMutationInput = {
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MealScheduleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    mealId?: IntFieldUpdateOperationsInput | number
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentCreateInput = {
    text: string
    createdAt?: Date | string
    meal: MealCreateNestedOneWithoutCommentsInput
  }

  export type CommentUncheckedCreateInput = {
    id?: number
    mealId: number
    text: string
    createdAt?: Date | string
  }

  export type CommentUpdateInput = {
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    meal?: MealUpdateOneRequiredWithoutCommentsNestedInput
  }

  export type CommentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    mealId?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentCreateManyInput = {
    id?: number
    mealId: number
    text: string
    createdAt?: Date | string
  }

  export type CommentUpdateManyMutationInput = {
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    mealId?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RatingCreateInput = {
    score: number
    createdAt?: Date | string
    meal: MealCreateNestedOneWithoutRatingsInput
  }

  export type RatingUncheckedCreateInput = {
    id?: number
    mealId: number
    score: number
    createdAt?: Date | string
  }

  export type RatingUpdateInput = {
    score?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    meal?: MealUpdateOneRequiredWithoutRatingsNestedInput
  }

  export type RatingUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    mealId?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RatingCreateManyInput = {
    id?: number
    mealId: number
    score: number
    createdAt?: Date | string
  }

  export type RatingUpdateManyMutationInput = {
    score?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RatingUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    mealId?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.Category | EnumCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoryFilter<$PrismaModel> | $Enums.Category
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type MealIngredientListRelationFilter = {
    every?: MealIngredientWhereInput
    some?: MealIngredientWhereInput
    none?: MealIngredientWhereInput
  }

  export type MealScheduleListRelationFilter = {
    every?: MealScheduleWhereInput
    some?: MealScheduleWhereInput
    none?: MealScheduleWhereInput
  }

  export type CommentListRelationFilter = {
    every?: CommentWhereInput
    some?: CommentWhereInput
    none?: CommentWhereInput
  }

  export type RatingListRelationFilter = {
    every?: RatingWhereInput
    some?: RatingWhereInput
    none?: RatingWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type MealIngredientOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MealScheduleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CommentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RatingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MealCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    category?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MealAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type MealMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    category?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MealMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    category?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MealSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Category | EnumCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoryWithAggregatesFilter<$PrismaModel> | $Enums.Category
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCategoryFilter<$PrismaModel>
    _max?: NestedEnumCategoryFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IngredientCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type IngredientAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IngredientMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type IngredientMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type IngredientSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type MealScalarRelationFilter = {
    is?: MealWhereInput
    isNot?: MealWhereInput
  }

  export type IngredientScalarRelationFilter = {
    is?: IngredientWhereInput
    isNot?: IngredientWhereInput
  }

  export type MealIngredientMealIdIngredientIdCompoundUniqueInput = {
    mealId: number
    ingredientId: number
  }

  export type MealIngredientCountOrderByAggregateInput = {
    mealId?: SortOrder
    ingredientId?: SortOrder
    quantity?: SortOrder
    unit?: SortOrder
  }

  export type MealIngredientAvgOrderByAggregateInput = {
    mealId?: SortOrder
    ingredientId?: SortOrder
    quantity?: SortOrder
  }

  export type MealIngredientMaxOrderByAggregateInput = {
    mealId?: SortOrder
    ingredientId?: SortOrder
    quantity?: SortOrder
    unit?: SortOrder
  }

  export type MealIngredientMinOrderByAggregateInput = {
    mealId?: SortOrder
    ingredientId?: SortOrder
    quantity?: SortOrder
    unit?: SortOrder
  }

  export type MealIngredientSumOrderByAggregateInput = {
    mealId?: SortOrder
    ingredientId?: SortOrder
    quantity?: SortOrder
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type MealScheduleCountOrderByAggregateInput = {
    id?: SortOrder
    mealId?: SortOrder
    scheduledDate?: SortOrder
  }

  export type MealScheduleAvgOrderByAggregateInput = {
    id?: SortOrder
    mealId?: SortOrder
  }

  export type MealScheduleMaxOrderByAggregateInput = {
    id?: SortOrder
    mealId?: SortOrder
    scheduledDate?: SortOrder
  }

  export type MealScheduleMinOrderByAggregateInput = {
    id?: SortOrder
    mealId?: SortOrder
    scheduledDate?: SortOrder
  }

  export type MealScheduleSumOrderByAggregateInput = {
    id?: SortOrder
    mealId?: SortOrder
  }

  export type CommentCountOrderByAggregateInput = {
    id?: SortOrder
    mealId?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
  }

  export type CommentAvgOrderByAggregateInput = {
    id?: SortOrder
    mealId?: SortOrder
  }

  export type CommentMaxOrderByAggregateInput = {
    id?: SortOrder
    mealId?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
  }

  export type CommentMinOrderByAggregateInput = {
    id?: SortOrder
    mealId?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
  }

  export type CommentSumOrderByAggregateInput = {
    id?: SortOrder
    mealId?: SortOrder
  }

  export type RatingCountOrderByAggregateInput = {
    id?: SortOrder
    mealId?: SortOrder
    score?: SortOrder
    createdAt?: SortOrder
  }

  export type RatingAvgOrderByAggregateInput = {
    id?: SortOrder
    mealId?: SortOrder
    score?: SortOrder
  }

  export type RatingMaxOrderByAggregateInput = {
    id?: SortOrder
    mealId?: SortOrder
    score?: SortOrder
    createdAt?: SortOrder
  }

  export type RatingMinOrderByAggregateInput = {
    id?: SortOrder
    mealId?: SortOrder
    score?: SortOrder
    createdAt?: SortOrder
  }

  export type RatingSumOrderByAggregateInput = {
    id?: SortOrder
    mealId?: SortOrder
    score?: SortOrder
  }

  export type MealIngredientCreateNestedManyWithoutMealInput = {
    create?: XOR<MealIngredientCreateWithoutMealInput, MealIngredientUncheckedCreateWithoutMealInput> | MealIngredientCreateWithoutMealInput[] | MealIngredientUncheckedCreateWithoutMealInput[]
    connectOrCreate?: MealIngredientCreateOrConnectWithoutMealInput | MealIngredientCreateOrConnectWithoutMealInput[]
    createMany?: MealIngredientCreateManyMealInputEnvelope
    connect?: MealIngredientWhereUniqueInput | MealIngredientWhereUniqueInput[]
  }

  export type MealScheduleCreateNestedManyWithoutMealInput = {
    create?: XOR<MealScheduleCreateWithoutMealInput, MealScheduleUncheckedCreateWithoutMealInput> | MealScheduleCreateWithoutMealInput[] | MealScheduleUncheckedCreateWithoutMealInput[]
    connectOrCreate?: MealScheduleCreateOrConnectWithoutMealInput | MealScheduleCreateOrConnectWithoutMealInput[]
    createMany?: MealScheduleCreateManyMealInputEnvelope
    connect?: MealScheduleWhereUniqueInput | MealScheduleWhereUniqueInput[]
  }

  export type CommentCreateNestedManyWithoutMealInput = {
    create?: XOR<CommentCreateWithoutMealInput, CommentUncheckedCreateWithoutMealInput> | CommentCreateWithoutMealInput[] | CommentUncheckedCreateWithoutMealInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutMealInput | CommentCreateOrConnectWithoutMealInput[]
    createMany?: CommentCreateManyMealInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type RatingCreateNestedManyWithoutMealInput = {
    create?: XOR<RatingCreateWithoutMealInput, RatingUncheckedCreateWithoutMealInput> | RatingCreateWithoutMealInput[] | RatingUncheckedCreateWithoutMealInput[]
    connectOrCreate?: RatingCreateOrConnectWithoutMealInput | RatingCreateOrConnectWithoutMealInput[]
    createMany?: RatingCreateManyMealInputEnvelope
    connect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
  }

  export type MealIngredientUncheckedCreateNestedManyWithoutMealInput = {
    create?: XOR<MealIngredientCreateWithoutMealInput, MealIngredientUncheckedCreateWithoutMealInput> | MealIngredientCreateWithoutMealInput[] | MealIngredientUncheckedCreateWithoutMealInput[]
    connectOrCreate?: MealIngredientCreateOrConnectWithoutMealInput | MealIngredientCreateOrConnectWithoutMealInput[]
    createMany?: MealIngredientCreateManyMealInputEnvelope
    connect?: MealIngredientWhereUniqueInput | MealIngredientWhereUniqueInput[]
  }

  export type MealScheduleUncheckedCreateNestedManyWithoutMealInput = {
    create?: XOR<MealScheduleCreateWithoutMealInput, MealScheduleUncheckedCreateWithoutMealInput> | MealScheduleCreateWithoutMealInput[] | MealScheduleUncheckedCreateWithoutMealInput[]
    connectOrCreate?: MealScheduleCreateOrConnectWithoutMealInput | MealScheduleCreateOrConnectWithoutMealInput[]
    createMany?: MealScheduleCreateManyMealInputEnvelope
    connect?: MealScheduleWhereUniqueInput | MealScheduleWhereUniqueInput[]
  }

  export type CommentUncheckedCreateNestedManyWithoutMealInput = {
    create?: XOR<CommentCreateWithoutMealInput, CommentUncheckedCreateWithoutMealInput> | CommentCreateWithoutMealInput[] | CommentUncheckedCreateWithoutMealInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutMealInput | CommentCreateOrConnectWithoutMealInput[]
    createMany?: CommentCreateManyMealInputEnvelope
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
  }

  export type RatingUncheckedCreateNestedManyWithoutMealInput = {
    create?: XOR<RatingCreateWithoutMealInput, RatingUncheckedCreateWithoutMealInput> | RatingCreateWithoutMealInput[] | RatingUncheckedCreateWithoutMealInput[]
    connectOrCreate?: RatingCreateOrConnectWithoutMealInput | RatingCreateOrConnectWithoutMealInput[]
    createMany?: RatingCreateManyMealInputEnvelope
    connect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumCategoryFieldUpdateOperationsInput = {
    set?: $Enums.Category
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type MealIngredientUpdateManyWithoutMealNestedInput = {
    create?: XOR<MealIngredientCreateWithoutMealInput, MealIngredientUncheckedCreateWithoutMealInput> | MealIngredientCreateWithoutMealInput[] | MealIngredientUncheckedCreateWithoutMealInput[]
    connectOrCreate?: MealIngredientCreateOrConnectWithoutMealInput | MealIngredientCreateOrConnectWithoutMealInput[]
    upsert?: MealIngredientUpsertWithWhereUniqueWithoutMealInput | MealIngredientUpsertWithWhereUniqueWithoutMealInput[]
    createMany?: MealIngredientCreateManyMealInputEnvelope
    set?: MealIngredientWhereUniqueInput | MealIngredientWhereUniqueInput[]
    disconnect?: MealIngredientWhereUniqueInput | MealIngredientWhereUniqueInput[]
    delete?: MealIngredientWhereUniqueInput | MealIngredientWhereUniqueInput[]
    connect?: MealIngredientWhereUniqueInput | MealIngredientWhereUniqueInput[]
    update?: MealIngredientUpdateWithWhereUniqueWithoutMealInput | MealIngredientUpdateWithWhereUniqueWithoutMealInput[]
    updateMany?: MealIngredientUpdateManyWithWhereWithoutMealInput | MealIngredientUpdateManyWithWhereWithoutMealInput[]
    deleteMany?: MealIngredientScalarWhereInput | MealIngredientScalarWhereInput[]
  }

  export type MealScheduleUpdateManyWithoutMealNestedInput = {
    create?: XOR<MealScheduleCreateWithoutMealInput, MealScheduleUncheckedCreateWithoutMealInput> | MealScheduleCreateWithoutMealInput[] | MealScheduleUncheckedCreateWithoutMealInput[]
    connectOrCreate?: MealScheduleCreateOrConnectWithoutMealInput | MealScheduleCreateOrConnectWithoutMealInput[]
    upsert?: MealScheduleUpsertWithWhereUniqueWithoutMealInput | MealScheduleUpsertWithWhereUniqueWithoutMealInput[]
    createMany?: MealScheduleCreateManyMealInputEnvelope
    set?: MealScheduleWhereUniqueInput | MealScheduleWhereUniqueInput[]
    disconnect?: MealScheduleWhereUniqueInput | MealScheduleWhereUniqueInput[]
    delete?: MealScheduleWhereUniqueInput | MealScheduleWhereUniqueInput[]
    connect?: MealScheduleWhereUniqueInput | MealScheduleWhereUniqueInput[]
    update?: MealScheduleUpdateWithWhereUniqueWithoutMealInput | MealScheduleUpdateWithWhereUniqueWithoutMealInput[]
    updateMany?: MealScheduleUpdateManyWithWhereWithoutMealInput | MealScheduleUpdateManyWithWhereWithoutMealInput[]
    deleteMany?: MealScheduleScalarWhereInput | MealScheduleScalarWhereInput[]
  }

  export type CommentUpdateManyWithoutMealNestedInput = {
    create?: XOR<CommentCreateWithoutMealInput, CommentUncheckedCreateWithoutMealInput> | CommentCreateWithoutMealInput[] | CommentUncheckedCreateWithoutMealInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutMealInput | CommentCreateOrConnectWithoutMealInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutMealInput | CommentUpsertWithWhereUniqueWithoutMealInput[]
    createMany?: CommentCreateManyMealInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutMealInput | CommentUpdateWithWhereUniqueWithoutMealInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutMealInput | CommentUpdateManyWithWhereWithoutMealInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type RatingUpdateManyWithoutMealNestedInput = {
    create?: XOR<RatingCreateWithoutMealInput, RatingUncheckedCreateWithoutMealInput> | RatingCreateWithoutMealInput[] | RatingUncheckedCreateWithoutMealInput[]
    connectOrCreate?: RatingCreateOrConnectWithoutMealInput | RatingCreateOrConnectWithoutMealInput[]
    upsert?: RatingUpsertWithWhereUniqueWithoutMealInput | RatingUpsertWithWhereUniqueWithoutMealInput[]
    createMany?: RatingCreateManyMealInputEnvelope
    set?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    disconnect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    delete?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    connect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    update?: RatingUpdateWithWhereUniqueWithoutMealInput | RatingUpdateWithWhereUniqueWithoutMealInput[]
    updateMany?: RatingUpdateManyWithWhereWithoutMealInput | RatingUpdateManyWithWhereWithoutMealInput[]
    deleteMany?: RatingScalarWhereInput | RatingScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MealIngredientUncheckedUpdateManyWithoutMealNestedInput = {
    create?: XOR<MealIngredientCreateWithoutMealInput, MealIngredientUncheckedCreateWithoutMealInput> | MealIngredientCreateWithoutMealInput[] | MealIngredientUncheckedCreateWithoutMealInput[]
    connectOrCreate?: MealIngredientCreateOrConnectWithoutMealInput | MealIngredientCreateOrConnectWithoutMealInput[]
    upsert?: MealIngredientUpsertWithWhereUniqueWithoutMealInput | MealIngredientUpsertWithWhereUniqueWithoutMealInput[]
    createMany?: MealIngredientCreateManyMealInputEnvelope
    set?: MealIngredientWhereUniqueInput | MealIngredientWhereUniqueInput[]
    disconnect?: MealIngredientWhereUniqueInput | MealIngredientWhereUniqueInput[]
    delete?: MealIngredientWhereUniqueInput | MealIngredientWhereUniqueInput[]
    connect?: MealIngredientWhereUniqueInput | MealIngredientWhereUniqueInput[]
    update?: MealIngredientUpdateWithWhereUniqueWithoutMealInput | MealIngredientUpdateWithWhereUniqueWithoutMealInput[]
    updateMany?: MealIngredientUpdateManyWithWhereWithoutMealInput | MealIngredientUpdateManyWithWhereWithoutMealInput[]
    deleteMany?: MealIngredientScalarWhereInput | MealIngredientScalarWhereInput[]
  }

  export type MealScheduleUncheckedUpdateManyWithoutMealNestedInput = {
    create?: XOR<MealScheduleCreateWithoutMealInput, MealScheduleUncheckedCreateWithoutMealInput> | MealScheduleCreateWithoutMealInput[] | MealScheduleUncheckedCreateWithoutMealInput[]
    connectOrCreate?: MealScheduleCreateOrConnectWithoutMealInput | MealScheduleCreateOrConnectWithoutMealInput[]
    upsert?: MealScheduleUpsertWithWhereUniqueWithoutMealInput | MealScheduleUpsertWithWhereUniqueWithoutMealInput[]
    createMany?: MealScheduleCreateManyMealInputEnvelope
    set?: MealScheduleWhereUniqueInput | MealScheduleWhereUniqueInput[]
    disconnect?: MealScheduleWhereUniqueInput | MealScheduleWhereUniqueInput[]
    delete?: MealScheduleWhereUniqueInput | MealScheduleWhereUniqueInput[]
    connect?: MealScheduleWhereUniqueInput | MealScheduleWhereUniqueInput[]
    update?: MealScheduleUpdateWithWhereUniqueWithoutMealInput | MealScheduleUpdateWithWhereUniqueWithoutMealInput[]
    updateMany?: MealScheduleUpdateManyWithWhereWithoutMealInput | MealScheduleUpdateManyWithWhereWithoutMealInput[]
    deleteMany?: MealScheduleScalarWhereInput | MealScheduleScalarWhereInput[]
  }

  export type CommentUncheckedUpdateManyWithoutMealNestedInput = {
    create?: XOR<CommentCreateWithoutMealInput, CommentUncheckedCreateWithoutMealInput> | CommentCreateWithoutMealInput[] | CommentUncheckedCreateWithoutMealInput[]
    connectOrCreate?: CommentCreateOrConnectWithoutMealInput | CommentCreateOrConnectWithoutMealInput[]
    upsert?: CommentUpsertWithWhereUniqueWithoutMealInput | CommentUpsertWithWhereUniqueWithoutMealInput[]
    createMany?: CommentCreateManyMealInputEnvelope
    set?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    disconnect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    delete?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    connect?: CommentWhereUniqueInput | CommentWhereUniqueInput[]
    update?: CommentUpdateWithWhereUniqueWithoutMealInput | CommentUpdateWithWhereUniqueWithoutMealInput[]
    updateMany?: CommentUpdateManyWithWhereWithoutMealInput | CommentUpdateManyWithWhereWithoutMealInput[]
    deleteMany?: CommentScalarWhereInput | CommentScalarWhereInput[]
  }

  export type RatingUncheckedUpdateManyWithoutMealNestedInput = {
    create?: XOR<RatingCreateWithoutMealInput, RatingUncheckedCreateWithoutMealInput> | RatingCreateWithoutMealInput[] | RatingUncheckedCreateWithoutMealInput[]
    connectOrCreate?: RatingCreateOrConnectWithoutMealInput | RatingCreateOrConnectWithoutMealInput[]
    upsert?: RatingUpsertWithWhereUniqueWithoutMealInput | RatingUpsertWithWhereUniqueWithoutMealInput[]
    createMany?: RatingCreateManyMealInputEnvelope
    set?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    disconnect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    delete?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    connect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    update?: RatingUpdateWithWhereUniqueWithoutMealInput | RatingUpdateWithWhereUniqueWithoutMealInput[]
    updateMany?: RatingUpdateManyWithWhereWithoutMealInput | RatingUpdateManyWithWhereWithoutMealInput[]
    deleteMany?: RatingScalarWhereInput | RatingScalarWhereInput[]
  }

  export type MealIngredientCreateNestedManyWithoutIngredientInput = {
    create?: XOR<MealIngredientCreateWithoutIngredientInput, MealIngredientUncheckedCreateWithoutIngredientInput> | MealIngredientCreateWithoutIngredientInput[] | MealIngredientUncheckedCreateWithoutIngredientInput[]
    connectOrCreate?: MealIngredientCreateOrConnectWithoutIngredientInput | MealIngredientCreateOrConnectWithoutIngredientInput[]
    createMany?: MealIngredientCreateManyIngredientInputEnvelope
    connect?: MealIngredientWhereUniqueInput | MealIngredientWhereUniqueInput[]
  }

  export type MealIngredientUncheckedCreateNestedManyWithoutIngredientInput = {
    create?: XOR<MealIngredientCreateWithoutIngredientInput, MealIngredientUncheckedCreateWithoutIngredientInput> | MealIngredientCreateWithoutIngredientInput[] | MealIngredientUncheckedCreateWithoutIngredientInput[]
    connectOrCreate?: MealIngredientCreateOrConnectWithoutIngredientInput | MealIngredientCreateOrConnectWithoutIngredientInput[]
    createMany?: MealIngredientCreateManyIngredientInputEnvelope
    connect?: MealIngredientWhereUniqueInput | MealIngredientWhereUniqueInput[]
  }

  export type MealIngredientUpdateManyWithoutIngredientNestedInput = {
    create?: XOR<MealIngredientCreateWithoutIngredientInput, MealIngredientUncheckedCreateWithoutIngredientInput> | MealIngredientCreateWithoutIngredientInput[] | MealIngredientUncheckedCreateWithoutIngredientInput[]
    connectOrCreate?: MealIngredientCreateOrConnectWithoutIngredientInput | MealIngredientCreateOrConnectWithoutIngredientInput[]
    upsert?: MealIngredientUpsertWithWhereUniqueWithoutIngredientInput | MealIngredientUpsertWithWhereUniqueWithoutIngredientInput[]
    createMany?: MealIngredientCreateManyIngredientInputEnvelope
    set?: MealIngredientWhereUniqueInput | MealIngredientWhereUniqueInput[]
    disconnect?: MealIngredientWhereUniqueInput | MealIngredientWhereUniqueInput[]
    delete?: MealIngredientWhereUniqueInput | MealIngredientWhereUniqueInput[]
    connect?: MealIngredientWhereUniqueInput | MealIngredientWhereUniqueInput[]
    update?: MealIngredientUpdateWithWhereUniqueWithoutIngredientInput | MealIngredientUpdateWithWhereUniqueWithoutIngredientInput[]
    updateMany?: MealIngredientUpdateManyWithWhereWithoutIngredientInput | MealIngredientUpdateManyWithWhereWithoutIngredientInput[]
    deleteMany?: MealIngredientScalarWhereInput | MealIngredientScalarWhereInput[]
  }

  export type MealIngredientUncheckedUpdateManyWithoutIngredientNestedInput = {
    create?: XOR<MealIngredientCreateWithoutIngredientInput, MealIngredientUncheckedCreateWithoutIngredientInput> | MealIngredientCreateWithoutIngredientInput[] | MealIngredientUncheckedCreateWithoutIngredientInput[]
    connectOrCreate?: MealIngredientCreateOrConnectWithoutIngredientInput | MealIngredientCreateOrConnectWithoutIngredientInput[]
    upsert?: MealIngredientUpsertWithWhereUniqueWithoutIngredientInput | MealIngredientUpsertWithWhereUniqueWithoutIngredientInput[]
    createMany?: MealIngredientCreateManyIngredientInputEnvelope
    set?: MealIngredientWhereUniqueInput | MealIngredientWhereUniqueInput[]
    disconnect?: MealIngredientWhereUniqueInput | MealIngredientWhereUniqueInput[]
    delete?: MealIngredientWhereUniqueInput | MealIngredientWhereUniqueInput[]
    connect?: MealIngredientWhereUniqueInput | MealIngredientWhereUniqueInput[]
    update?: MealIngredientUpdateWithWhereUniqueWithoutIngredientInput | MealIngredientUpdateWithWhereUniqueWithoutIngredientInput[]
    updateMany?: MealIngredientUpdateManyWithWhereWithoutIngredientInput | MealIngredientUpdateManyWithWhereWithoutIngredientInput[]
    deleteMany?: MealIngredientScalarWhereInput | MealIngredientScalarWhereInput[]
  }

  export type MealCreateNestedOneWithoutIngredientsInput = {
    create?: XOR<MealCreateWithoutIngredientsInput, MealUncheckedCreateWithoutIngredientsInput>
    connectOrCreate?: MealCreateOrConnectWithoutIngredientsInput
    connect?: MealWhereUniqueInput
  }

  export type IngredientCreateNestedOneWithoutMealsInput = {
    create?: XOR<IngredientCreateWithoutMealsInput, IngredientUncheckedCreateWithoutMealsInput>
    connectOrCreate?: IngredientCreateOrConnectWithoutMealsInput
    connect?: IngredientWhereUniqueInput
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type MealUpdateOneRequiredWithoutIngredientsNestedInput = {
    create?: XOR<MealCreateWithoutIngredientsInput, MealUncheckedCreateWithoutIngredientsInput>
    connectOrCreate?: MealCreateOrConnectWithoutIngredientsInput
    upsert?: MealUpsertWithoutIngredientsInput
    connect?: MealWhereUniqueInput
    update?: XOR<XOR<MealUpdateToOneWithWhereWithoutIngredientsInput, MealUpdateWithoutIngredientsInput>, MealUncheckedUpdateWithoutIngredientsInput>
  }

  export type IngredientUpdateOneRequiredWithoutMealsNestedInput = {
    create?: XOR<IngredientCreateWithoutMealsInput, IngredientUncheckedCreateWithoutMealsInput>
    connectOrCreate?: IngredientCreateOrConnectWithoutMealsInput
    upsert?: IngredientUpsertWithoutMealsInput
    connect?: IngredientWhereUniqueInput
    update?: XOR<XOR<IngredientUpdateToOneWithWhereWithoutMealsInput, IngredientUpdateWithoutMealsInput>, IngredientUncheckedUpdateWithoutMealsInput>
  }

  export type MealCreateNestedOneWithoutSchedulesInput = {
    create?: XOR<MealCreateWithoutSchedulesInput, MealUncheckedCreateWithoutSchedulesInput>
    connectOrCreate?: MealCreateOrConnectWithoutSchedulesInput
    connect?: MealWhereUniqueInput
  }

  export type MealUpdateOneRequiredWithoutSchedulesNestedInput = {
    create?: XOR<MealCreateWithoutSchedulesInput, MealUncheckedCreateWithoutSchedulesInput>
    connectOrCreate?: MealCreateOrConnectWithoutSchedulesInput
    upsert?: MealUpsertWithoutSchedulesInput
    connect?: MealWhereUniqueInput
    update?: XOR<XOR<MealUpdateToOneWithWhereWithoutSchedulesInput, MealUpdateWithoutSchedulesInput>, MealUncheckedUpdateWithoutSchedulesInput>
  }

  export type MealCreateNestedOneWithoutCommentsInput = {
    create?: XOR<MealCreateWithoutCommentsInput, MealUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: MealCreateOrConnectWithoutCommentsInput
    connect?: MealWhereUniqueInput
  }

  export type MealUpdateOneRequiredWithoutCommentsNestedInput = {
    create?: XOR<MealCreateWithoutCommentsInput, MealUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: MealCreateOrConnectWithoutCommentsInput
    upsert?: MealUpsertWithoutCommentsInput
    connect?: MealWhereUniqueInput
    update?: XOR<XOR<MealUpdateToOneWithWhereWithoutCommentsInput, MealUpdateWithoutCommentsInput>, MealUncheckedUpdateWithoutCommentsInput>
  }

  export type MealCreateNestedOneWithoutRatingsInput = {
    create?: XOR<MealCreateWithoutRatingsInput, MealUncheckedCreateWithoutRatingsInput>
    connectOrCreate?: MealCreateOrConnectWithoutRatingsInput
    connect?: MealWhereUniqueInput
  }

  export type MealUpdateOneRequiredWithoutRatingsNestedInput = {
    create?: XOR<MealCreateWithoutRatingsInput, MealUncheckedCreateWithoutRatingsInput>
    connectOrCreate?: MealCreateOrConnectWithoutRatingsInput
    upsert?: MealUpsertWithoutRatingsInput
    connect?: MealWhereUniqueInput
    update?: XOR<XOR<MealUpdateToOneWithWhereWithoutRatingsInput, MealUpdateWithoutRatingsInput>, MealUncheckedUpdateWithoutRatingsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.Category | EnumCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoryFilter<$PrismaModel> | $Enums.Category
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Category | EnumCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoryWithAggregatesFilter<$PrismaModel> | $Enums.Category
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCategoryFilter<$PrismaModel>
    _max?: NestedEnumCategoryFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type MealIngredientCreateWithoutMealInput = {
    quantity?: Decimal | DecimalJsLike | number | string | null
    unit?: string | null
    ingredient: IngredientCreateNestedOneWithoutMealsInput
  }

  export type MealIngredientUncheckedCreateWithoutMealInput = {
    ingredientId: number
    quantity?: Decimal | DecimalJsLike | number | string | null
    unit?: string | null
  }

  export type MealIngredientCreateOrConnectWithoutMealInput = {
    where: MealIngredientWhereUniqueInput
    create: XOR<MealIngredientCreateWithoutMealInput, MealIngredientUncheckedCreateWithoutMealInput>
  }

  export type MealIngredientCreateManyMealInputEnvelope = {
    data: MealIngredientCreateManyMealInput | MealIngredientCreateManyMealInput[]
    skipDuplicates?: boolean
  }

  export type MealScheduleCreateWithoutMealInput = {
    scheduledDate: Date | string
  }

  export type MealScheduleUncheckedCreateWithoutMealInput = {
    id?: number
    scheduledDate: Date | string
  }

  export type MealScheduleCreateOrConnectWithoutMealInput = {
    where: MealScheduleWhereUniqueInput
    create: XOR<MealScheduleCreateWithoutMealInput, MealScheduleUncheckedCreateWithoutMealInput>
  }

  export type MealScheduleCreateManyMealInputEnvelope = {
    data: MealScheduleCreateManyMealInput | MealScheduleCreateManyMealInput[]
    skipDuplicates?: boolean
  }

  export type CommentCreateWithoutMealInput = {
    text: string
    createdAt?: Date | string
  }

  export type CommentUncheckedCreateWithoutMealInput = {
    id?: number
    text: string
    createdAt?: Date | string
  }

  export type CommentCreateOrConnectWithoutMealInput = {
    where: CommentWhereUniqueInput
    create: XOR<CommentCreateWithoutMealInput, CommentUncheckedCreateWithoutMealInput>
  }

  export type CommentCreateManyMealInputEnvelope = {
    data: CommentCreateManyMealInput | CommentCreateManyMealInput[]
    skipDuplicates?: boolean
  }

  export type RatingCreateWithoutMealInput = {
    score: number
    createdAt?: Date | string
  }

  export type RatingUncheckedCreateWithoutMealInput = {
    id?: number
    score: number
    createdAt?: Date | string
  }

  export type RatingCreateOrConnectWithoutMealInput = {
    where: RatingWhereUniqueInput
    create: XOR<RatingCreateWithoutMealInput, RatingUncheckedCreateWithoutMealInput>
  }

  export type RatingCreateManyMealInputEnvelope = {
    data: RatingCreateManyMealInput | RatingCreateManyMealInput[]
    skipDuplicates?: boolean
  }

  export type MealIngredientUpsertWithWhereUniqueWithoutMealInput = {
    where: MealIngredientWhereUniqueInput
    update: XOR<MealIngredientUpdateWithoutMealInput, MealIngredientUncheckedUpdateWithoutMealInput>
    create: XOR<MealIngredientCreateWithoutMealInput, MealIngredientUncheckedCreateWithoutMealInput>
  }

  export type MealIngredientUpdateWithWhereUniqueWithoutMealInput = {
    where: MealIngredientWhereUniqueInput
    data: XOR<MealIngredientUpdateWithoutMealInput, MealIngredientUncheckedUpdateWithoutMealInput>
  }

  export type MealIngredientUpdateManyWithWhereWithoutMealInput = {
    where: MealIngredientScalarWhereInput
    data: XOR<MealIngredientUpdateManyMutationInput, MealIngredientUncheckedUpdateManyWithoutMealInput>
  }

  export type MealIngredientScalarWhereInput = {
    AND?: MealIngredientScalarWhereInput | MealIngredientScalarWhereInput[]
    OR?: MealIngredientScalarWhereInput[]
    NOT?: MealIngredientScalarWhereInput | MealIngredientScalarWhereInput[]
    mealId?: IntFilter<"MealIngredient"> | number
    ingredientId?: IntFilter<"MealIngredient"> | number
    quantity?: DecimalNullableFilter<"MealIngredient"> | Decimal | DecimalJsLike | number | string | null
    unit?: StringNullableFilter<"MealIngredient"> | string | null
  }

  export type MealScheduleUpsertWithWhereUniqueWithoutMealInput = {
    where: MealScheduleWhereUniqueInput
    update: XOR<MealScheduleUpdateWithoutMealInput, MealScheduleUncheckedUpdateWithoutMealInput>
    create: XOR<MealScheduleCreateWithoutMealInput, MealScheduleUncheckedCreateWithoutMealInput>
  }

  export type MealScheduleUpdateWithWhereUniqueWithoutMealInput = {
    where: MealScheduleWhereUniqueInput
    data: XOR<MealScheduleUpdateWithoutMealInput, MealScheduleUncheckedUpdateWithoutMealInput>
  }

  export type MealScheduleUpdateManyWithWhereWithoutMealInput = {
    where: MealScheduleScalarWhereInput
    data: XOR<MealScheduleUpdateManyMutationInput, MealScheduleUncheckedUpdateManyWithoutMealInput>
  }

  export type MealScheduleScalarWhereInput = {
    AND?: MealScheduleScalarWhereInput | MealScheduleScalarWhereInput[]
    OR?: MealScheduleScalarWhereInput[]
    NOT?: MealScheduleScalarWhereInput | MealScheduleScalarWhereInput[]
    id?: IntFilter<"MealSchedule"> | number
    mealId?: IntFilter<"MealSchedule"> | number
    scheduledDate?: DateTimeFilter<"MealSchedule"> | Date | string
  }

  export type CommentUpsertWithWhereUniqueWithoutMealInput = {
    where: CommentWhereUniqueInput
    update: XOR<CommentUpdateWithoutMealInput, CommentUncheckedUpdateWithoutMealInput>
    create: XOR<CommentCreateWithoutMealInput, CommentUncheckedCreateWithoutMealInput>
  }

  export type CommentUpdateWithWhereUniqueWithoutMealInput = {
    where: CommentWhereUniqueInput
    data: XOR<CommentUpdateWithoutMealInput, CommentUncheckedUpdateWithoutMealInput>
  }

  export type CommentUpdateManyWithWhereWithoutMealInput = {
    where: CommentScalarWhereInput
    data: XOR<CommentUpdateManyMutationInput, CommentUncheckedUpdateManyWithoutMealInput>
  }

  export type CommentScalarWhereInput = {
    AND?: CommentScalarWhereInput | CommentScalarWhereInput[]
    OR?: CommentScalarWhereInput[]
    NOT?: CommentScalarWhereInput | CommentScalarWhereInput[]
    id?: IntFilter<"Comment"> | number
    mealId?: IntFilter<"Comment"> | number
    text?: StringFilter<"Comment"> | string
    createdAt?: DateTimeFilter<"Comment"> | Date | string
  }

  export type RatingUpsertWithWhereUniqueWithoutMealInput = {
    where: RatingWhereUniqueInput
    update: XOR<RatingUpdateWithoutMealInput, RatingUncheckedUpdateWithoutMealInput>
    create: XOR<RatingCreateWithoutMealInput, RatingUncheckedCreateWithoutMealInput>
  }

  export type RatingUpdateWithWhereUniqueWithoutMealInput = {
    where: RatingWhereUniqueInput
    data: XOR<RatingUpdateWithoutMealInput, RatingUncheckedUpdateWithoutMealInput>
  }

  export type RatingUpdateManyWithWhereWithoutMealInput = {
    where: RatingScalarWhereInput
    data: XOR<RatingUpdateManyMutationInput, RatingUncheckedUpdateManyWithoutMealInput>
  }

  export type RatingScalarWhereInput = {
    AND?: RatingScalarWhereInput | RatingScalarWhereInput[]
    OR?: RatingScalarWhereInput[]
    NOT?: RatingScalarWhereInput | RatingScalarWhereInput[]
    id?: IntFilter<"Rating"> | number
    mealId?: IntFilter<"Rating"> | number
    score?: IntFilter<"Rating"> | number
    createdAt?: DateTimeFilter<"Rating"> | Date | string
  }

  export type MealIngredientCreateWithoutIngredientInput = {
    quantity?: Decimal | DecimalJsLike | number | string | null
    unit?: string | null
    meal: MealCreateNestedOneWithoutIngredientsInput
  }

  export type MealIngredientUncheckedCreateWithoutIngredientInput = {
    mealId: number
    quantity?: Decimal | DecimalJsLike | number | string | null
    unit?: string | null
  }

  export type MealIngredientCreateOrConnectWithoutIngredientInput = {
    where: MealIngredientWhereUniqueInput
    create: XOR<MealIngredientCreateWithoutIngredientInput, MealIngredientUncheckedCreateWithoutIngredientInput>
  }

  export type MealIngredientCreateManyIngredientInputEnvelope = {
    data: MealIngredientCreateManyIngredientInput | MealIngredientCreateManyIngredientInput[]
    skipDuplicates?: boolean
  }

  export type MealIngredientUpsertWithWhereUniqueWithoutIngredientInput = {
    where: MealIngredientWhereUniqueInput
    update: XOR<MealIngredientUpdateWithoutIngredientInput, MealIngredientUncheckedUpdateWithoutIngredientInput>
    create: XOR<MealIngredientCreateWithoutIngredientInput, MealIngredientUncheckedCreateWithoutIngredientInput>
  }

  export type MealIngredientUpdateWithWhereUniqueWithoutIngredientInput = {
    where: MealIngredientWhereUniqueInput
    data: XOR<MealIngredientUpdateWithoutIngredientInput, MealIngredientUncheckedUpdateWithoutIngredientInput>
  }

  export type MealIngredientUpdateManyWithWhereWithoutIngredientInput = {
    where: MealIngredientScalarWhereInput
    data: XOR<MealIngredientUpdateManyMutationInput, MealIngredientUncheckedUpdateManyWithoutIngredientInput>
  }

  export type MealCreateWithoutIngredientsInput = {
    name: string
    description?: string | null
    category: $Enums.Category
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    schedules?: MealScheduleCreateNestedManyWithoutMealInput
    comments?: CommentCreateNestedManyWithoutMealInput
    ratings?: RatingCreateNestedManyWithoutMealInput
  }

  export type MealUncheckedCreateWithoutIngredientsInput = {
    id?: number
    name: string
    description?: string | null
    category: $Enums.Category
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    schedules?: MealScheduleUncheckedCreateNestedManyWithoutMealInput
    comments?: CommentUncheckedCreateNestedManyWithoutMealInput
    ratings?: RatingUncheckedCreateNestedManyWithoutMealInput
  }

  export type MealCreateOrConnectWithoutIngredientsInput = {
    where: MealWhereUniqueInput
    create: XOR<MealCreateWithoutIngredientsInput, MealUncheckedCreateWithoutIngredientsInput>
  }

  export type IngredientCreateWithoutMealsInput = {
    name: string
    createdAt?: Date | string
  }

  export type IngredientUncheckedCreateWithoutMealsInput = {
    id?: number
    name: string
    createdAt?: Date | string
  }

  export type IngredientCreateOrConnectWithoutMealsInput = {
    where: IngredientWhereUniqueInput
    create: XOR<IngredientCreateWithoutMealsInput, IngredientUncheckedCreateWithoutMealsInput>
  }

  export type MealUpsertWithoutIngredientsInput = {
    update: XOR<MealUpdateWithoutIngredientsInput, MealUncheckedUpdateWithoutIngredientsInput>
    create: XOR<MealCreateWithoutIngredientsInput, MealUncheckedCreateWithoutIngredientsInput>
    where?: MealWhereInput
  }

  export type MealUpdateToOneWithWhereWithoutIngredientsInput = {
    where?: MealWhereInput
    data: XOR<MealUpdateWithoutIngredientsInput, MealUncheckedUpdateWithoutIngredientsInput>
  }

  export type MealUpdateWithoutIngredientsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    schedules?: MealScheduleUpdateManyWithoutMealNestedInput
    comments?: CommentUpdateManyWithoutMealNestedInput
    ratings?: RatingUpdateManyWithoutMealNestedInput
  }

  export type MealUncheckedUpdateWithoutIngredientsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    schedules?: MealScheduleUncheckedUpdateManyWithoutMealNestedInput
    comments?: CommentUncheckedUpdateManyWithoutMealNestedInput
    ratings?: RatingUncheckedUpdateManyWithoutMealNestedInput
  }

  export type IngredientUpsertWithoutMealsInput = {
    update: XOR<IngredientUpdateWithoutMealsInput, IngredientUncheckedUpdateWithoutMealsInput>
    create: XOR<IngredientCreateWithoutMealsInput, IngredientUncheckedCreateWithoutMealsInput>
    where?: IngredientWhereInput
  }

  export type IngredientUpdateToOneWithWhereWithoutMealsInput = {
    where?: IngredientWhereInput
    data: XOR<IngredientUpdateWithoutMealsInput, IngredientUncheckedUpdateWithoutMealsInput>
  }

  export type IngredientUpdateWithoutMealsInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IngredientUncheckedUpdateWithoutMealsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MealCreateWithoutSchedulesInput = {
    name: string
    description?: string | null
    category: $Enums.Category
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ingredients?: MealIngredientCreateNestedManyWithoutMealInput
    comments?: CommentCreateNestedManyWithoutMealInput
    ratings?: RatingCreateNestedManyWithoutMealInput
  }

  export type MealUncheckedCreateWithoutSchedulesInput = {
    id?: number
    name: string
    description?: string | null
    category: $Enums.Category
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ingredients?: MealIngredientUncheckedCreateNestedManyWithoutMealInput
    comments?: CommentUncheckedCreateNestedManyWithoutMealInput
    ratings?: RatingUncheckedCreateNestedManyWithoutMealInput
  }

  export type MealCreateOrConnectWithoutSchedulesInput = {
    where: MealWhereUniqueInput
    create: XOR<MealCreateWithoutSchedulesInput, MealUncheckedCreateWithoutSchedulesInput>
  }

  export type MealUpsertWithoutSchedulesInput = {
    update: XOR<MealUpdateWithoutSchedulesInput, MealUncheckedUpdateWithoutSchedulesInput>
    create: XOR<MealCreateWithoutSchedulesInput, MealUncheckedCreateWithoutSchedulesInput>
    where?: MealWhereInput
  }

  export type MealUpdateToOneWithWhereWithoutSchedulesInput = {
    where?: MealWhereInput
    data: XOR<MealUpdateWithoutSchedulesInput, MealUncheckedUpdateWithoutSchedulesInput>
  }

  export type MealUpdateWithoutSchedulesInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ingredients?: MealIngredientUpdateManyWithoutMealNestedInput
    comments?: CommentUpdateManyWithoutMealNestedInput
    ratings?: RatingUpdateManyWithoutMealNestedInput
  }

  export type MealUncheckedUpdateWithoutSchedulesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ingredients?: MealIngredientUncheckedUpdateManyWithoutMealNestedInput
    comments?: CommentUncheckedUpdateManyWithoutMealNestedInput
    ratings?: RatingUncheckedUpdateManyWithoutMealNestedInput
  }

  export type MealCreateWithoutCommentsInput = {
    name: string
    description?: string | null
    category: $Enums.Category
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ingredients?: MealIngredientCreateNestedManyWithoutMealInput
    schedules?: MealScheduleCreateNestedManyWithoutMealInput
    ratings?: RatingCreateNestedManyWithoutMealInput
  }

  export type MealUncheckedCreateWithoutCommentsInput = {
    id?: number
    name: string
    description?: string | null
    category: $Enums.Category
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ingredients?: MealIngredientUncheckedCreateNestedManyWithoutMealInput
    schedules?: MealScheduleUncheckedCreateNestedManyWithoutMealInput
    ratings?: RatingUncheckedCreateNestedManyWithoutMealInput
  }

  export type MealCreateOrConnectWithoutCommentsInput = {
    where: MealWhereUniqueInput
    create: XOR<MealCreateWithoutCommentsInput, MealUncheckedCreateWithoutCommentsInput>
  }

  export type MealUpsertWithoutCommentsInput = {
    update: XOR<MealUpdateWithoutCommentsInput, MealUncheckedUpdateWithoutCommentsInput>
    create: XOR<MealCreateWithoutCommentsInput, MealUncheckedCreateWithoutCommentsInput>
    where?: MealWhereInput
  }

  export type MealUpdateToOneWithWhereWithoutCommentsInput = {
    where?: MealWhereInput
    data: XOR<MealUpdateWithoutCommentsInput, MealUncheckedUpdateWithoutCommentsInput>
  }

  export type MealUpdateWithoutCommentsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ingredients?: MealIngredientUpdateManyWithoutMealNestedInput
    schedules?: MealScheduleUpdateManyWithoutMealNestedInput
    ratings?: RatingUpdateManyWithoutMealNestedInput
  }

  export type MealUncheckedUpdateWithoutCommentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ingredients?: MealIngredientUncheckedUpdateManyWithoutMealNestedInput
    schedules?: MealScheduleUncheckedUpdateManyWithoutMealNestedInput
    ratings?: RatingUncheckedUpdateManyWithoutMealNestedInput
  }

  export type MealCreateWithoutRatingsInput = {
    name: string
    description?: string | null
    category: $Enums.Category
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ingredients?: MealIngredientCreateNestedManyWithoutMealInput
    schedules?: MealScheduleCreateNestedManyWithoutMealInput
    comments?: CommentCreateNestedManyWithoutMealInput
  }

  export type MealUncheckedCreateWithoutRatingsInput = {
    id?: number
    name: string
    description?: string | null
    category: $Enums.Category
    image?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ingredients?: MealIngredientUncheckedCreateNestedManyWithoutMealInput
    schedules?: MealScheduleUncheckedCreateNestedManyWithoutMealInput
    comments?: CommentUncheckedCreateNestedManyWithoutMealInput
  }

  export type MealCreateOrConnectWithoutRatingsInput = {
    where: MealWhereUniqueInput
    create: XOR<MealCreateWithoutRatingsInput, MealUncheckedCreateWithoutRatingsInput>
  }

  export type MealUpsertWithoutRatingsInput = {
    update: XOR<MealUpdateWithoutRatingsInput, MealUncheckedUpdateWithoutRatingsInput>
    create: XOR<MealCreateWithoutRatingsInput, MealUncheckedCreateWithoutRatingsInput>
    where?: MealWhereInput
  }

  export type MealUpdateToOneWithWhereWithoutRatingsInput = {
    where?: MealWhereInput
    data: XOR<MealUpdateWithoutRatingsInput, MealUncheckedUpdateWithoutRatingsInput>
  }

  export type MealUpdateWithoutRatingsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ingredients?: MealIngredientUpdateManyWithoutMealNestedInput
    schedules?: MealScheduleUpdateManyWithoutMealNestedInput
    comments?: CommentUpdateManyWithoutMealNestedInput
  }

  export type MealUncheckedUpdateWithoutRatingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ingredients?: MealIngredientUncheckedUpdateManyWithoutMealNestedInput
    schedules?: MealScheduleUncheckedUpdateManyWithoutMealNestedInput
    comments?: CommentUncheckedUpdateManyWithoutMealNestedInput
  }

  export type MealIngredientCreateManyMealInput = {
    ingredientId: number
    quantity?: Decimal | DecimalJsLike | number | string | null
    unit?: string | null
  }

  export type MealScheduleCreateManyMealInput = {
    id?: number
    scheduledDate: Date | string
  }

  export type CommentCreateManyMealInput = {
    id?: number
    text: string
    createdAt?: Date | string
  }

  export type RatingCreateManyMealInput = {
    id?: number
    score: number
    createdAt?: Date | string
  }

  export type MealIngredientUpdateWithoutMealInput = {
    quantity?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    ingredient?: IngredientUpdateOneRequiredWithoutMealsNestedInput
  }

  export type MealIngredientUncheckedUpdateWithoutMealInput = {
    ingredientId?: IntFieldUpdateOperationsInput | number
    quantity?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    unit?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MealIngredientUncheckedUpdateManyWithoutMealInput = {
    ingredientId?: IntFieldUpdateOperationsInput | number
    quantity?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    unit?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MealScheduleUpdateWithoutMealInput = {
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MealScheduleUncheckedUpdateWithoutMealInput = {
    id?: IntFieldUpdateOperationsInput | number
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MealScheduleUncheckedUpdateManyWithoutMealInput = {
    id?: IntFieldUpdateOperationsInput | number
    scheduledDate?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUpdateWithoutMealInput = {
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateWithoutMealInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommentUncheckedUpdateManyWithoutMealInput = {
    id?: IntFieldUpdateOperationsInput | number
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RatingUpdateWithoutMealInput = {
    score?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RatingUncheckedUpdateWithoutMealInput = {
    id?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RatingUncheckedUpdateManyWithoutMealInput = {
    id?: IntFieldUpdateOperationsInput | number
    score?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MealIngredientCreateManyIngredientInput = {
    mealId: number
    quantity?: Decimal | DecimalJsLike | number | string | null
    unit?: string | null
  }

  export type MealIngredientUpdateWithoutIngredientInput = {
    quantity?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    meal?: MealUpdateOneRequiredWithoutIngredientsNestedInput
  }

  export type MealIngredientUncheckedUpdateWithoutIngredientInput = {
    mealId?: IntFieldUpdateOperationsInput | number
    quantity?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    unit?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MealIngredientUncheckedUpdateManyWithoutIngredientInput = {
    mealId?: IntFieldUpdateOperationsInput | number
    quantity?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    unit?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}