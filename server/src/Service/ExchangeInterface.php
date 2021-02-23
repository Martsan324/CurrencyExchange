<?php


namespace App\Service;


interface ExchangeInterface
{
    public function exchangeCurrency(string $destinationCurrency) :float;

}
