﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using NUnit.Framework;
using SGBank.BLL;

namespace SGBank.Tests
{
    [TestFixture]
    public class AccountMangerTests
    {
        [Test]
        public void FoundAccountReturnsSuccess()
        {
            var manager = new AccountManager();

            var response = manager.GetAccount(1);

            Assert.IsTrue(response.Success);
            Assert.AreEqual(1, response.Data.AccountNumber);
            Assert.AreEqual("Mary", response.Data.FirstName);
        }

        [Test]
        public void NotFoundAccountReturnsFail()
        {
            var manager = new AccountManager();

            var response = manager.GetAccount(9999);

            Assert.IsFalse(response.Success);
        }

        [Test]
        public void TransferSuccess()
        {
            var manager = new AccountManager();

            var response = manager.Transfer(1, 4, 40M);

            Assert.AreEqual(response.Data.NewBalanceFrom, 307M);
               Assert.AreEqual(response.Data.NewBalanceTo,10000040M);

        }
    }
}
