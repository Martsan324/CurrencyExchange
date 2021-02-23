<?php


namespace App\Service;

use Exception;
use Symfony\Component\HttpClient\HttpClient;
use Throwable;

class WebExchangeService implements ExchangeInterface
{
    //const EXCHANGE_RATE_URL ="https://v6.exchangerate-api.com/v6/f802d8d9cff8d6559f396b5e/latest/PLN";

    /** @throws Throwable */
    public function exchangeCurrency(string $destinationCurrency): float
    {
        $client = HttpClient::create();
        $response = $client->request('GET', $_ENV['APP_EXCHANGE_URL'], ['headers' => ['Accept' => 'application/json']]);

        $statusCode = $response->getStatusCode();

        if (200 !== $statusCode) {
            throw new Exception(sprintf('Error request: %s', $response->getContent(false)));
        }

        $responseArray = $response->toArray();

        return (float)($responseArray['conversion_rates'][$destinationCurrency] ?? 0.00);
    }
}
